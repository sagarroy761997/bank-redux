import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as BalanceActions from "./../../Store/BalanceActions";

const Deposit = () => {
  const balance = useSelector((state) => {
    return state.BalanceReducer.balance;
  });
  const loading = useSelector((state) => {
    return state.BalanceReducer.loading;
  });
  const loan = useSelector((state) => {
    return state.LoanReducer.loan;
  });
  const dispatch = useDispatch();
  const onDepositHandle = () => {
    dispatch(BalanceActions.depositAsync());
  };

  return (
    <div>
      <h1>Deposit</h1>
      {loading ? "Loading..." : ""}<br/>
      Balance : {balance}
      <br />
      {loan}
      <br />
      {/* <input type="number" /> */}
      <button onClick={onDepositHandle}>DEPOSIT</button>
    </div>
  );
};

export default Deposit;
