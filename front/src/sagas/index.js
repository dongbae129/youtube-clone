import { all, fork } from "redux-saga/effects";
import user from "./user";
import product from "./product";
export default function* rootsaga() {
  yield all([fork(user), fork(product)]);
}
