import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/new expense/NewExpense";
const INITIAL_EXPENSSES = [
  {
    id: "e1",
    title: "A book",
    amount: 19.99,
    date: new Date(2020, 2, 24),
  },
  { id: "e2",
    title: "Boots",
    amount: 75,
    date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Air Pods",
    amount: 140.0,
    date: new Date(2021, 10, 11),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 250,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [allExpenses, setAllExpenses] = useState(INITIAL_EXPENSSES);

  const dataFromForm = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    setAllExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  const handleDelete = (itemId) => {
    setAllExpenses((prevExpenses) => {
      return prevExpenses.filter(item => item.id !== itemId)
    })
  }

  return (
    <div>
      <NewExpense formData={dataFromForm} />
      <Expenses handleDelete={handleDelete} items={allExpenses} />
    </div>
  );
}

export default App;
