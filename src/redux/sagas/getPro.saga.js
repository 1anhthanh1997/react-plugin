import { call, fork, put, take, takeEvery } from "redux-saga/effects";
import * as Types from "../actions/types";
import { getAppReviewsSuccessAction } from "../actions";
import { callApi } from "../../services";
import APIConfig from "../../api_config";

const getAppReviewApi = async (appId) => {
  console.log(appId)
  let data = await callApi({
    url: APIConfig.GET_APP_REVIEWS + appId,
    method: "get",
  }).catch((e) => console.log(e));
  if (data) {
    return data;
  }
  return null;
};

function* getAppReviewsSaga(action) {
  console.log(action.appId)
  let appId = action.appId;
  let result = yield call(getAppReviewApi, appId);
  if (result) {
    let reviews = result.reviews;
    const randomColorList = [
      "#666444",
      "#F1EFD8",
      "#767462",
      "#3A3523",
      "#505130",
      "#252F14",
    ];
    const min = 0;
    const max = randomColorList.length - 1;

    for (let index = 0; index < reviews.length; index++) {
      let intNumber = Math.floor(Math.random() * (max - min)) + min;
      let chosenColor = randomColorList[intNumber];
      reviews[index].color = chosenColor;
    }
    yield put(getAppReviewsSuccessAction(reviews, result.app));
  }
}

function* listenGetAppReviewsSaga() {
  yield takeEvery(Types.GET_APP_REVIEWS, getAppReviewsSaga);
}

export const getProSaga = [fork(listenGetAppReviewsSaga)];
