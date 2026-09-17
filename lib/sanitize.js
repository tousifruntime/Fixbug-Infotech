import validator from "validator";

// Strip null bytes and other non-printable control characters (keeps normal
// whitespace). This guards against header-injection / log-injection style
// payloads sneaking through as "valid" text.
function stripControlChars(str) {
  return str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
}

export function sanitizeContactData(data) {
  const email = validator.trim(data.email);

  return {
    fullName: stripControlChars(validator.trim(data.fullName)),
    email: validator.normalizeEmail(email) || email,
    phone: stripControlChars(validator.trim(data.phone)),
    subject: stripControlChars(validator.trim(data.subject)),
    message: stripControlChars(validator.trim(data.message)),
  };
}

// Escapes text for safe embedding inside an HTML email body. This is the
// layer that actually neutralizes XSS payloads — sanitizeContactData() above
// only cleans up control characters, it doesn't strip HTML, so this MUST be
// called on every field right before it's interpolated into HTML.
export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}