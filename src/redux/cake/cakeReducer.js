const initState = { numOfCakes: 10 };
const cakeReducer = (state = initState, action) => {
  switch (action.type) {
    case "BYE_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes -(action.payload),
      };

    default:
      return state;
  }
};
export default cakeReducer;
