const initialState = {
  data: [],
  basket: [],
  productDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DATA":
      console.log("GetProduct data is working now");
      return { ...state, productDetails: action.payload };
    case "ADD_DATA":
      console.log("api data added");
      return {
        ...state,
        data: action.data,
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
