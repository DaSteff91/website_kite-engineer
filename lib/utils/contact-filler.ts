export const generateContactHref = (subject: string, message: string): string => {
  // Helper to coerce and sanitize inputs
  const toSafeString = (value: unknown, maxLen = 2000) => {
    if (typeof value !== "string") return "";
    const trimmed = value.trim();
    // Limit length to avoid extremely large URLs (tweak maxLen as desired)
    return trimmed.length > maxLen ? trimmed.slice(0, maxLen) : trimmed;
  };

  const safeSubject = toSafeString(subject);
  const safeMessage = toSafeString(message);

  const params = new URLSearchParams();
  if (safeSubject) params.set("subject", safeSubject);
  if (safeMessage) params.set("message", safeMessage);

  // Return relative path without locale prefix — your Link/createNavigation will add locale.
  const query = params.toString();
  return query ? `/contact?${query}` : `/contact`;
};