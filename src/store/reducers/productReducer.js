import { ProductActionTypes } from "../../consts";

const initialState = {
  Products: null,
  product: null,
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return { ...state, loading: true };
    case ProductActionTypes.FETCH_PRODUCTS_SUCCES:
      return { ...state, products: action.payload, loading: false };
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ProductActionTypes.FETCH_ONE_PRODUCT:
      return { ...state, product: action.payload, loading: false };
    default:
      return state;
  }
};
