import { all, call } from "redux-saga/effects";
import user from "./user";

export default function* rootsaga() {
  yield all([call(user)]);
}
