export const formatPrice = (value) => {
  const total = value.toFixed(2);   
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(total);
};