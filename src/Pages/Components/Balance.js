import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => {
    return state.BalanceReducer.balance;
  });
  const loan = useSelector((state) => {
    return state.LoanReducer.loan;
  });
  const dispatch = useDispatch();
  const loanHandaler = () => {
    dispatch({ type: "applied" });
  }
  return (
    <div>
      Balance: {balance} <br/>
      {loan}<br/>
      <button onClick={loanHandaler}>Apply for loan</button>
    </div>
  );
};

export default Balance;
