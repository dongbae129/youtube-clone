import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_REQUEST,
} from "../reducers/product";

function uploadImageAPI(uploadImageData, config) {
  return axios.post("/api/product/image", uploadImageData, config);
}
function* uploadImage(action) {
  try {
    const result = yield call(uploadImageAPI, action.data, action.config);
    yield put({
      type: UPLOAD_IMAGE_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UPLOAD_IMAGE_FAILURE,
      error: e,
    });
  }
}

function* watchUploadImage() {
  yield takeEvery(UPLOAD_IMAGE_REQUEST, uploadImage);
}

export default function* productSaga() {
  yield all([fork(watchUploadImage)]);
}
