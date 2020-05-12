import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_REQUEST,
  LOAD_MAIN_POSTS_SUCCESS,
  LOAD_MAIN_POSTS_FAILURE,
  LOAD_MAIN_POSTS_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAILURE,
  UPLOAD_PRODUCT_REQUEST,
  GET_DETAIL_PRODUCT_SUCCESS,
  GET_DETAIL_PRODUCT_FAILURE,
  GET_DETAIL_PRODUCT_REQUEST,
  UPLOAD_CART_SUCCESS,
  UPLOAD_CART_FAILURE,
  UPLOAD_CART_REQUEST,
} from "../reducers/product";
import { ADD_CART_TO_ME, GET_USER_REQUEST } from "../reducers/user";

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

function loadMainProductsAPI(loadMainProductsData) {
  return axios.get("/api/products/");
}
function* loadMainProducts(action) {
  try {
    const result = yield call(loadMainProductsAPI, action.data);
    yield put({
      type: LOAD_MAIN_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_MAIN_POSTS_FAILURE,
    });
  }
}

function* watchLoadMainProducts() {
  yield takeEvery(LOAD_MAIN_POSTS_REQUEST, loadMainProducts);
}

function uploadProductAPI(uploadProductData) {
  return axios.post("/api/product/", uploadProductData);
}
function* uploadProduct(action) {
  try {
    const result = yield call(uploadProductAPI, action.data);
    yield put({
      type: UPLOAD_PRODUCT_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UPLOAD_PRODUCT_FAILURE,
    });
  }
}

function* watchUploadProduct() {
  yield takeEvery(UPLOAD_PRODUCT_REQUEST, uploadProduct);
}

function getDetailProductAPI(productId) {
  return axios.get(`/api/product/${productId}?aa=AA`);
}
function* getDetailProduct(action) {
  try {
    const result = yield call(getDetailProductAPI, action.data);
    yield put({
      type: GET_DETAIL_PRODUCT_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: GET_DETAIL_PRODUCT_FAILURE,
    });
  }
}

function* watchGetDetailProduct() {
  yield takeEvery(GET_DETAIL_PRODUCT_REQUEST, getDetailProduct);
}

function uploadCartAPI(productInfo) {
  return axios.post(`/api/product/cart`, productInfo);
}
function* uploadCart(action) {
  try {
    const result = yield call(uploadCartAPI, action.data);
    yield put({
      type: UPLOAD_CART_SUCCESS,
      data: result.data,
    });
    yield put({
      type: GET_USER_REQUEST,
    });
    alert("장바구니에 등록 되었습니다");
  } catch (e) {
    console.error(e);
    yield put({
      type: UPLOAD_CART_FAILURE,
    });
  }
}

function* watchUploadCart() {
  yield takeEvery(UPLOAD_CART_REQUEST, uploadCart);
}
export default function* productSaga() {
  yield all([
    fork(watchUploadImage),
    fork(watchUploadProduct),
    fork(watchLoadMainProducts),
    fork(watchGetDetailProduct),
    fork(watchUploadCart),
  ]);
}
