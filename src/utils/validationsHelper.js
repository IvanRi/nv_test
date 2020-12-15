import { LSGetContactData } from "../services/localStorageHelper";

export const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export const validateRepeatContact = (email, publication_id) => {
  const currentData = LSGetContactData();
  if (!currentData) return false;
  const hasRecentlyContact = currentData.filter(
    (item) => item.email === email && item.post_id === publication_id
  );
  return !!hasRecentlyContact.length;
};
