import {
  SET_POSTINGS,
  LOADING_POSTINGS,
  SET_LIKED_POSTINGS,
  CHANGE_CURRENT_FILTERS,
  SET_SEARCH_STRING,
} from "../redux/constants";

const INITIAL_STATE = {
  loadingPostings: true,
  postings: [],
  likedPosts: [],
  currentFilters: [],
  filteredPostings: null,
  searchKeyword: null,
};

const postings = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_POSTINGS:
      return { ...state, loadingPostings: true };
    case SET_POSTINGS:
      return { ...state, loadingPostings: false, postings: action.postings };
    case SET_LIKED_POSTINGS:
      return { ...state, likedPosts: action.likedPosts };
    case CHANGE_CURRENT_FILTERS:
      if (action.filterType === "Todos")
        return { ...state, filteredPostings: null, currentFilters: [] };
      const filtered = state.postings.filter(
        (post) =>
          post.operation_type.operation_type_name ===
          parseOperationType[action.filterType]
      );
      return {
        ...state,
        filteredPostings: filtered,
        currentFilters: [action.filterType],
      };
    case SET_SEARCH_STRING:
      const { keyword } = action;
      const newKeyword = keyword.length ? keyword : null;
      return { ...state, searchKeyword: newKeyword };
    default:
      return state;
  }
};

const parseOperationType = {
  Comprar: "Venta",
  Temporal: "Alquiler Temporal",
  Alquilar: "Alquiler",
};

export default postings;
