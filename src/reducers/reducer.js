import { LocalMoviesSharp } from "@material-ui/icons";

const initialState = {
  data: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
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
      const jsonData = JSON.stringify(action.data);
      localStorage.setItem("data", jsonData);
      return {
        ...state,
        data: JSON.parse(localStorage.getItem("data")),
      };

    case "ADD_DETAILS":
      console.log("details added");

      return {
        ...state,
        productDetails: action.payload,
      };

    case "ADD_TO_CART":
      console.log("I am working add to cart");
      const item = JSON.parse(localStorage.getItem("data")).filter(
        (item) => item.id === action.id
      );
      const jsonCart = JSON.stringify([...state.cart, item[0]]);
      localStorage.setItem("cart", jsonCart);

      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("cart")),
      };

    case "CART_DElETE":
      const index = state.cart.findIndex((item) => item.id === action.id);
      let newBasket = [...state.cart];

      newBasket.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(newBasket));

      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("cart")),
      };

    default:
      const jsonState = JSON.stringify(state);
      localStorage.setItem("state", jsonState);
      return {
        ...state,
      };
  }
};
export default reducer;
