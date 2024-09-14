export const formatPrice = (price) => {
  const formatted = new Intl.NumberFormat("en-US").format(Math.floor(price));
  return formatted.replace(/,/g, " "); // Replace commas with spaces
};
