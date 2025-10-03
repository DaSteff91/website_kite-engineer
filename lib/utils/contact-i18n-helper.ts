// lib/utils/contact-helpers.ts
import { CONTACT_TEMPLATES } from "@/lib/constants/contact-template";
import { generateContactHref } from "./contact-filler";

/**
 * Build a localized contact href using an already-provided translator function.
 * - contactT: translator for the ContactTemplates namespace (server-side getTranslations result)
 * - templatePath: key from CONTACT_TEMPLATES
 */
export const hrefForTemplateWithTranslator = (
  contactT: (key: string) => string,
  templatePath: keyof typeof CONTACT_TEMPLATES
): string => {
  const template = CONTACT_TEMPLATES[templatePath];
  if (!template) return "/contact";

  // If you store full keys like "ContactTemplates.schoolSupport.subject",
  // strip the namespace prefix to pass relative keys to contactT.
  const stripPrefix = (fullKey: string) =>
    fullKey.replace(/^ContactTemplates\./, "");

  const subjectKey = stripPrefix(template.subjectKey);
  const messageKey = stripPrefix(template.messageKey);

  const localizedSubject = contactT(subjectKey);
  const localizedMessage = contactT(messageKey);

  return generateContactHref(localizedSubject, localizedMessage);
};
