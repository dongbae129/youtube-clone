export const initialState = {
  imagePaths: [],
};

export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_REQUEST: {
      return {
        ...state,
      };
    }
    case UPLOAD_IMAGE_SUCCESS: {
      return {
        ...state,
        imagePaths: [...state.imagePaths, action.data],
      };
    }
    case UPLOAD_IMAGE_FAILURE: {
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
    default: {
      return {
        ...state,
      };
    }
  }
};
