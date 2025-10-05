import { notFound } from "next/navigation";
import { PAGE_METADATA } from "@/lib/constants/metadata";

export const metadata = PAGE_METADATA.notFound;

export default function CatchAllPage() {
  notFound();
}
