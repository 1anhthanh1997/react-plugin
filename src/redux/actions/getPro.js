import * as Types from "./types";

export function getAppReviewsAction(appId) {
    return {
        type: Types.GET_APP_REVIEWS,
        appId: appId,
    };
}

export function getAppReviewsSuccessAction(reviews, app) {
    return {
        type: Types.GET_APP_REVIEWS_SUCCESS,
        reviews: reviews,
        app: app,
    };
}

export function updateOpenDrawerValueAction(openDrawer) {
    return {
        type: Types.UPDATE_OPEN_DRAWER_VALUE,
        openDrawer: openDrawer,
    };
}

export function updateChosenReviewIdAction(chosenReviewId) {
    return {
        type: Types.UPDATE_CHOSEN_REVIEW_ID,
        chosenReviewId: chosenReviewId,
    };
}
