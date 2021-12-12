import React, { useState } from "react";
import "./ExpenseForm.css";
import Button from "../UI/Button";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const Data = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: +enteredAmount,
    };
    if (Data.title === "") {
      alert("Missing Title");
      return;
    }
    props.onExpenseData(Data);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    props.cancelHandling();
  };

  return (
    <div>
      <form id="form" onSubmit={submitHandler}>
        <div id="expense_controls" className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              onChange={dateChangeHandler}
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
            />
          </div>
        </div>
        <div id="actions" className="new-expense__actions">
          <Button
            className="cancel-button"
            type="cancel"
            onClick={props.cancelHandling}
          >
            Cancel
          </Button>
          <Button type="submit">Add Expense</Button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
