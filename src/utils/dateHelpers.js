import { differenceInDays, parse } from "date-fns";

export const getDiffInDays = (publishDate) => {
  const result = parse(publishDate, "dd/MM/yyyy", new Date());
  return differenceInDays(new Date(), result);
};
