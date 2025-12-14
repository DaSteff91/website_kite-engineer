import { notFound } from "next/navigation";
import { getPageMetadata } from "@/lib/constants/metadata";
import type { Metadata } from "next";

// export async function generateMetadata({
//   params,
// }: {
//   params: any;
// }): Promise<Metadata> {
//   const resolvedParams = await params;
//   const { locale } = resolvedParams;
//   return await getPageMetadata(locale, "notFound", "/not-found");
// }

export default function CatchAllPage() {
  notFound();
}
