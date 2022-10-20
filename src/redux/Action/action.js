export const addUser = (userData) => {
  return {
    type: "ADD_USER",
    payload: userData,
  };
};
