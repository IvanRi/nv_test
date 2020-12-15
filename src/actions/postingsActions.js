import {
  SET_POSTINGS,
  GENERIC_ERROR,
  LOADING_POSTINGS,
  SET_LIKED_POSTINGS,
  CHANGE_CURRENT_FILTERS,
  SET_SEARCH_STRING,
} from "../redux/constants";
import { postings } from "../services/mockedPostings";
import { LSGetLikedPosts } from "../services/localStorageHelper";

export const getAllPostings = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING_POSTINGS,
    });
    //simulacion de fetching
    const res = await postings;
    return dispatch({
      type: SET_POSTINGS,
      postings: res,
    });
  } catch (err) {
    dispatch({
      type: GENERIC_ERROR,
      msg: "Error al buscar las publicaciones.",
    });
  }
};

export const getLikedPostings = () => async (dispatch) => {
  try {
    //simulacion de fetching
    const res = await LSGetLikedPosts();
    return dispatch({
      type: SET_LIKED_POSTINGS,
      likedPosts: res,
    });
  } catch (err) {
    dispatch({
      type: GENERIC_ERROR,
      msg: "Error al buscar las publicaciones favoritas.",
    });
  }
};

export const changeCurrentFilters = (filterType) => async (dispatch) => {
  return dispatch({
    type: CHANGE_CURRENT_FILTERS,
    filterType,
  });
};

export const setSearchKeyword = (keyword) => async (dispatch) => {
  return dispatch({
    type: SET_SEARCH_STRING,
    keyword,
  });
};
