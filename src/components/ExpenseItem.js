import React from 'react';
import '../components/ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card'

function ExpenseItem (props) {

const removeItem = () => {
    props.handleDelete(props.id)
}    
console.log(props.id)
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button className='delete-button' onClick={removeItem}>Delete</button>
        </Card>
    )
}

export default ExpenseItem;