// 30.08.2025: not used anymore. No debugging currently

"use client";
import { usePathname } from "@/i18n/navigation";

export default function PathnameDebug() {
  const pathname = usePathname();

  return (
    <div style={{ padding: "1rem", background: "#eee", margin: "1rem 0" }}>
      <strong>Debug Component:</strong>
      <div>
        usePathname() returns: <code>{pathname}</code>
      </div>
    </div>
  );
}
