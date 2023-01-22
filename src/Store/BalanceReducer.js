const initialstate = {
  balance: 0,
  loading: false ,
};
const BalanceReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.payload, loading: false };
    case "WITHDRAWAL":
      return { balance: state.balance - action.payload, loading: false };
    case "LOADING":
      return { ...state, loading: true};
    default:
      return state;
  }
};

export default BalanceReducer;
