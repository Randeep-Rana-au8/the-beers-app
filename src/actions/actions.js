export const ADD_DATA = "ADD_DATA";
export const GET_PRODUCT_DATA = "GET_PRODUCT_DATA";
export const ADD_DETAILS = "ADD_DETAILS";
export const ADD_TO_CART = "ADD_TO_CART";

export const add_data = (data) => {
  return {
    type: ADD_DATA,
    data,
  };
};

export const getProductDetails = (id) => {
  const myId = JSON.stringify(id);
  localStorage.setItem("id", myId);
  return {
    type: "GET_PRODUCT_DATA",
    id,
  };
};

export const add_details = (payload) => {
  return {
    type: ADD_DETAILS,
    payload,
  };
};

export const addToCart = (id) => {
  console.log(id);
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const deleteToCart = (id) => {
  return {
    type: "CART_DElETE",
    id,
  };
};
