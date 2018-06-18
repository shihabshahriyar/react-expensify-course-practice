import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.expense.id}`}>{props.expense.description}</Link>
        <p>Amount: {props.expense.amount}</p>
        <p>Created At: {props.expense.createdAt}</p>
    </div>
)

const ConnectedExpenseListItem = connect((state) => {
    expenses: state.expenses
})(ExpenseListItem)

export default ConnectedExpenseListItem