import { CONTACT_TEMPLATES } from "../constants/contact-template";

export const generateContactHref = (
  templateKey: keyof typeof CONTACT_TEMPLATES,
  customVariables?: Record<string, string>
) => {

  if (!CONTACT_TEMPLATES[templateKey]) {
    console.error(`Invalid template key: ${templateKey}`);
    return "/contact";
  }

  const template = CONTACT_TEMPLATES[templateKey];
  
  // Process predefined variables for each subpage
  let subject = template.subject;
  let message = template.message;
  
  if (customVariables) {
    Object.entries(customVariables).forEach(([key, value]) => {
      const placeholder = `{${key}}`;
      subject = subject.replaceAll(placeholder, value);
      message = message.replaceAll(placeholder, value);
    });
  }

  // URL encode and build the href using URL parameters
  return `/contact?${new URLSearchParams({
    subject,
    message
  }).toString()}`;
};