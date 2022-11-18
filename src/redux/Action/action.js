export const addUser = (userData) => {
  // console.log(userData, "userData");
  return {
    type: "ADD_USER",
    payload: userData,
  };
};

export const curentUser = (curentUser) => {
  console.log(curentUser, "curentUser");
  return {
    type: "CURENT_USER",
    payload: curentUser,
  };
};

export const logoutUser = () => {
  return {
    type: "LOG_OUT_USER",
  };
};
