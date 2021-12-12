import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Button from "../UI/Button";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const expenseDdata = (info) => {
    const data = {
      ...info,
      id: Math.random().toString(),
    };
    props.formData(data);
  };
  const changeEditing = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };

  const renderElement = () => {
    if (!isEditing) {
      return <Button onClick={changeEditing}>Add new Expense</Button>
    } else {
      return (
        <ExpenseForm
          cancelHandling={handleCancel}
          onExpenseData={expenseDdata}
        />
      );
    }
  };

  return <div className="new-expense">{renderElement()}</div>;
};

export default NewExpense;
