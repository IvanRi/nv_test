export const parsePriceAmount = (number, currencyType) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currencyType,
    minimumFractionDigits: 0,
  }).format(number);
