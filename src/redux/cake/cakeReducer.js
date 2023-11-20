const initState = { numOfCakes: 10 };
const cakeReducer = (state = initState, action) => {
  switch (action.type) {
    case "BYE_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
export default cakeReducer;
