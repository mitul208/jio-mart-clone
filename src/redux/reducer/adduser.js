const initialState = { dataList: [] };

const addTheUser = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log(action.payload, "payload");
      return { ...state, dataList: [...state.dataList, action.payload] };
    default:
      return state;
  }
};

export default addTheUser;
