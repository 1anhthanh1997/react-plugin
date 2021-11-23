import * as Types from "../actions/types";

const initialState = {
  loading: false,
  reviews: [],
  openDrawer: false,
  app: {},
  chosenReviewId: "",
};
const getProReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_APP_REVIEWS:
      return {
        ...state,
        loading: true,
      };

    case Types.GET_APP_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.reviews,
        loading: false,
        app: action.app,
      };
    case Types.UPDATE_OPEN_DRAWER_VALUE:
      return {
        ...state,
        openDrawer: action.openDrawer,
      };
    case Types.UPDATE_CHOSEN_REVIEW_ID:
      return {
        ...state,
        chosenReviewId: action.chosenReviewId,
      };
    default:
      return state;
  }
};
export default getProReducer;
