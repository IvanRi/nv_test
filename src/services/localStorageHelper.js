export const LSSaveContactData = (newContact) => {
  const currentData = LSGetContactData();
  if (!currentData)
    return localStorage.setItem("contactInfo", JSON.stringify([newContact]));
  return localStorage.setItem(
    "contactInfo",
    JSON.stringify([...currentData, newContact])
  );
};

export const LSGetContactData = () => {
  const currentData = localStorage.getItem("contactInfo");
  return JSON.parse(currentData);
};

export const LSSaveLikePost = (post_id) => {
  const currentData = LSGetLikedPosts();
  if (!currentData)
    return localStorage.setItem("likedPosts", JSON.stringify([post_id]));
  return localStorage.setItem(
    "likedPosts",
    JSON.stringify([...currentData, post_id])
  );
};

export const LSRemoveLikePost = (post_id) => {
  const currentData = LSGetLikedPosts();
  const indexRemove = currentData.indexOf(post_id);
  currentData.splice(indexRemove, 1);
  return localStorage.setItem("likedPosts", JSON.stringify([...currentData]));
};

export const LSGetLikedPosts = () => {
  const currentData = localStorage.getItem("likedPosts");
  if (!currentData) return [];
  return JSON.parse(currentData);
};
