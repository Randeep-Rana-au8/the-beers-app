export const ADD_DATA = "ADD_DATA";
export const GET_PRODUCT_DATA = "GET_PRODUCT_DATA";
export const ADD_DETAILS = "ADD_DETAILS";

export const add_data = (data) => {
  return {
    type: ADD_DATA,
    data,
  };
};

export const getProductDetails = (id) => {
  console.log("this is getproductdetails actions data", id);
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
