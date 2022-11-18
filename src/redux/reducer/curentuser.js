const initialState = { curentuser: [], isLogin: false };

const curentTheData = (state = initialState, action) => {
  switch (action.type) {
    case "CURENT_USER":
      return { curentuser: action.payload, isLogin: true };
    case "LOG_OUT_USER":
      return { curentuser: [], isLogin: false };
    default:
      return state;
  }
};

export default curentTheData;
