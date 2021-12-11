import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

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
      return <button onClick={changeEditing}>Add New Expense</button>;
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
