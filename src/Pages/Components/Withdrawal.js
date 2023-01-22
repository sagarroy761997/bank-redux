import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Withdrawal = () => {
  const balance = useSelector((state) => {
    return state.BalanceReducer.balance;
  });
  const loan = useSelector((state) => {
    return state.LoanReducer.loan;
  });
  const dispatch = useDispatch();
  const onWithdrawalHandle = () => {
    dispatch({ type: "WITHDRAWAL", payload: 10 });
  };
  return (
    <div>
      <h1>Withdrawal</h1>
      Balance : {balance}
      <br />
      {loan}
      <br />
      <button onClick={onWithdrawalHandle}>Withdrawal</button>
    </div>
  );
};

export default Withdrawal;
