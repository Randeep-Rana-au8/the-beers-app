export const ADD_DATA = "ADD_DATA";
export const GET_PRODUCT_DATA = "GET_PRODUCT_DATA";

export const add_data = (data) => {
  return {
    type: ADD_DATA,
    data,
  };
};

export const getProductDetails = (payload) => {
  console.log("this is getproductdetails actions data", payload);
  return {
    type: "GET_PRODUCT_DATA",
    payload,
  };
};
