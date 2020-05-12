export const initialState = {
  imagePaths: [],
  mainPosts: [],
  uploadSuccess: false,
  uploadProduct: false,
  product: null,
  cartData: {},
};

export const UPLOAD_PRODUCT_REQUEST = "UPLOAD_PRODUCT_REQUEST";
export const UPLOAD_PRODUCT_SUCCESS = "UPLOAD_PRODUCT_SUCCESS";
export const UPLOAD_PRODUCT_FAILURE = "UPLOAD_PRODUCT_FAILURE";

export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";

export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";

export const GET_DETAIL_PRODUCT_REQUEST = "GET_DETAIL_PRODUCT_REQUEST";
export const GET_DETAIL_PRODUCT_SUCCESS = "GET_DETAIL_PRODUCT_SUCCESS";
export const GET_DETAIL_PRODUCT_FAILURE = "GET_DETAIL_PRODUCT_FAILURE";

export const UPLOAD_CART_REQUEST = "UPLOAD_CART_REQUEST";
export const UPLOAD_CART_SUCCESS = "UPLOAD_CART_SUCCESS";
export const UPLOAD_CART_FAILURE = "UPLOAD_CART_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PRODUCT_REQUEST: {
      return {
        ...state,
        uploadProduct: false,
      };
    }
    case UPLOAD_PRODUCT_SUCCESS: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
        uploadProduct: true,
      };
    }
    case UPLOAD_PRODUCT_FAILURE: {
      return {
        ...state,
        uploadProduct: false,
      };
    }

    case UPLOAD_IMAGE_REQUEST: {
      return {
        ...state,
        uploadSuccess: false,
      };
    }
    case UPLOAD_IMAGE_SUCCESS: {
      return {
        ...state,
        imagePaths: [...state.imagePaths, action.data],
        uploadSuccess: true,
      };
    }
    case UPLOAD_IMAGE_FAILURE: {
      return {
        ...state,
        uploadSuccess: false,
      };
    }
    case GET_DETAIL_PRODUCT_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_DETAIL_PRODUCT_SUCCESS: {
      return {
        ...state,
        product: action.data,
      };
    }
    case GET_DETAIL_PRODUCT_FAILURE: {
      return {
        ...state,
      };
    }
    case UPLOAD_CART_REQUEST: {
      return {
        ...state,
      };
    }
    case UPLOAD_CART_SUCCESS: {
      return {
        ...state,
        cartData: action.data,
      };
    }
    case UPLOAD_CART_FAILURE: {
      return {
        ...state,
      };
    }
    case REMOVE_IMAGE: {
      return {
        ...state,
        imagePaths: state.imagePaths.filter((v, i) => i !== action.data),
      };
    }
    case LOAD_MAIN_POSTS_REQUEST: {
      return {
        ...state,
      };
    }
    case LOAD_MAIN_POSTS_SUCCESS: {
      return {
        ...state,
        mainPosts: [...action.data],
      };
    }
    case LOAD_MAIN_POSTS_FAILURE: {
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
