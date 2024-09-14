export const validateWordLength = (value) => {
  if (!value.trim()) return false; // Ensure value is not empty or just spaces
  return /[\p{L}\p{N}]{2,}/u.test(value); // Unicode property escapes for letters and numbers with at least 2 characters
};
