const initialState = {
  data: [],
  basket: [],
  productDetails: {},
  productId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DATA":
      console.log("GetProduct data is working now");
      return { ...state, productId: action.id };

    case "ADD_DATA":
      console.log("api data added");
      return {
        ...state,
        data: action.data,
      };

    case "ADD_DETAILS":
      console.log("details added");
      return {
        ...state,
        productDetails: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
