#!/usr/bin/env python3
"""
Translate a flat, two-level JSON structure using a LibreTranslate API.

- Keeps all keys unchanged
- Translates only string values
- Writes translated JSON files per target language
- Logs progress and actions to the terminal
"""

from __future__ import annotations

import json
import logging
import pathlib
import sys
import os
from typing import Dict

import requests


# ---------------------------------------------------------------------------
# Logging configuration
# ---------------------------------------------------------------------------

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-8s | %(message)s",
    datefmt="%H:%M:%S",
)

logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

LIBRETRANSLATE_URL: str = "https://translate.kite-engineer.de/translate"
API_KEY: str = "624a63c8-f755-4a4c-a5d9-0dbf0307ff40"

SOURCE_LANGUAGE: str = "en"
TARGET_LANGUAGES: tuple[str, ...] = ("de", "pt-BR")

SOURCE_FILE: pathlib.Path = pathlib.Path(
    "/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/messages/en-US_testing.json"
)


# ---------------------------------------------------------------------------
# Types
# ---------------------------------------------------------------------------

PageContent = Dict[str, Dict[str, str]]


# ---------------------------------------------------------------------------
# File I/O
# ---------------------------------------------------------------------------


def load_json(path: pathlib.Path) -> PageContent:
    """
    Load a JSON file containing page content.

    :param path: Path to the JSON file
    :return: Parsed JSON as a dictionary
    """
    logger.info("Loading source JSON file: %s", path)

    with path.open("r", encoding="utf-8") as file:
        data: PageContent = json.load(file)

    logger.info("Loaded %d top-level page entries", len(data))
    return data


def write_json(path: pathlib.Path, data: PageContent) -> None:
    """
    Write JSON data to disk with stable formatting.

    :param path: Output file path
    :param data: JSON-compatible dictionary
    """
    logger.info("Writing translated JSON to: %s", path)

    with path.open("w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=2)
        file.write("\n")

    logger.info("Successfully wrote file: %s", path)


def write_json_atomic(path: pathlib.Path, data: PageContent) -> None:
    """
    Atomically write JSON data to disk.

    This guarantees that already translated content survives crashes,
    DNS issues, or manual interruption.
    """
    tmp_path = path.with_suffix(path.suffix + ".tmp")

    with tmp_path.open("w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=2)
        file.write("\n")

    tmp_path.replace(path)


# ---------------------------------------------------------------------------
# Translation
# ---------------------------------------------------------------------------


def translate_text(text: str, target_language: str) -> str:
    """
    Translate a single string using LibreTranslate.

    :param text: English source text
    :param target_language: Target language code (e.g. "de", "pt-BR")
    :return: Translated string
    :raises RuntimeError: If the API response is invalid
    """
    logger.debug(
        "Translating text to '%s': %.40s%s",
        target_language,
        text,
        "…" if len(text) > 40 else "",
    )

    payload = {
        "q": text,
        "source": SOURCE_LANGUAGE,
        "target": target_language,
        "format": "text",
        "alternatives": 1,
        "api_key": API_KEY,
    }

    response = requests.post(
        LIBRETRANSLATE_URL,
        json=payload,
        headers={"Content-Type": "application/json"},
        timeout=30,
    )

    try:
        response.raise_for_status()
    except requests.HTTPError as exc:
        logger.error(
            "Translation request failed (%s → %s): %s",
            SOURCE_LANGUAGE,
            target_language,
            exc,
        )
        raise

    data = response.json()

    if "translatedText" not in data:
        logger.error("Unexpected translation response: %s", data)
        raise RuntimeError(f"Invalid translation response: {data}")

    return data["translatedText"]


def translate_page_content(
    source: PageContent,
    target_language: str,
    output_path: pathlib.Path,
) -> PageContent:
    """
    Translate all values of a page-content JSON structure.

    :param source: Original English JSON
    :param target_language: Target language code
    :return: Translated JSON with identical keys
    """
    logger.info("Starting translation for language: %s", target_language)

    if output_path.exists():
        logger.info("Resuming existing translation file: %s", output_path)
        with output_path.open("r", encoding="utf-8") as file:
            translated: PageContent = json.load(file)
    else:
        translated = {}

    for page_key, entries in source.items():
        if page_key in translated:
            logger.info("Skipping already translated page '%s'", page_key)
            continue

        logger.info(
            "Translating page '%s' (%d entries)",
            page_key,
            len(entries),
        )

        translated[page_key] = {}

        for entry_key, text in entries.items():
            translated_text = translate_text(text, target_language)
            translated[page_key][entry_key] = translated_text

        write_json_atomic(output_path, translated)
        logger.info("Saved progress after page '%s'", page_key)

    logger.info("Finished translation for language: %s", target_language)
    return translated


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def build_output_path(source_path: pathlib.Path, target_language: str) -> pathlib.Path:
    """
    Build output filename based on source file and target language.

    Example:
    en-US_testing.json -> de_testing.json

    :param source_path: Path to the source file
    :param target_language: Target language code
    :return: Output file path
    """
    name_parts = source_path.name.split("_", maxsplit=1)
    suffix = name_parts[1] if len(name_parts) > 1 else source_path.name

    output_path = source_path.with_name(f"{target_language}_{suffix}")
    logger.debug("Computed output path: %s", output_path)

    return output_path


def main() -> None:
    """
    Script entry point.
    """
    logger.info("=== JSON translation script started ===")

    if not SOURCE_FILE.exists():
        logger.error("Source file not found: %s", SOURCE_FILE)
        sys.exit(1)

    source_json = load_json(SOURCE_FILE)

    for target_language in TARGET_LANGUAGES:
        output_path = build_output_path(SOURCE_FILE, target_language)

        translate_page_content(
            source=source_json,
            target_language=target_language,
            output_path=output_path,
        )

    logger.info("=== Translation script finished successfully ===")


if __name__ == "__main__":
    main()
