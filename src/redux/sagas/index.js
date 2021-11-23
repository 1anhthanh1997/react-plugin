import { all } from "redux-saga/effects";
import { getProSaga } from "./getPro.saga";

export default function* rootSaga() {
  yield all([...getProSaga]);
}
