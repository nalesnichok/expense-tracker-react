import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

function Expanses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  
  const passYearForward = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  let total = 0;
  filteredExpenses.map((item) => {
    total += item.amount;
    return total.toFixed(2);
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onYearChange={passYearForward} />
      {filteredExpenses.length === 0 ? (
        <p style={{ color: "red", textAlign: "center", fontWeight: "lighter" }}>
          No items for the selected year
        </p>
      ) : (
        filteredExpenses.map((item) => {
          return (
            <ExpenseItem
              handleDelete={props.handleDelete}
              key={item.id}
              id={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })
      )}
      <p className="expenses-total">Total: ${total}</p>
    </Card>
  );
}

export default Expanses;
