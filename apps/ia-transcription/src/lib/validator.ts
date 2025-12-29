const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

export function isValidEmail(value: string) {
  return EMAIL_REGEX.test(value.trim());
}
