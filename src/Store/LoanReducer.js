const initialState = {
  loan: "Loan Needed",
};
const LoanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "applied":
      return {loan : 'Loan Applied' };
    default:
      return state;
  }
};

export default LoanReducer;
