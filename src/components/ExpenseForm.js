import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: '', 
        }
    }
    onDescriptionChange = (e) => {
        const desc = e.target.value
        this.setState(() => {
            return {
                description: desc
            }
        })
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => {
            return {
                note: note
            }
        })
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => {
                return {
                    amount: amount
                }
            })
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => {
                return {
                    createdAt: createdAt
                }
            })
        }
    }
    onCalenderFocused = ({focused}) => {
        this.setState(() => {
            return {
                calenderFocused: focused
            }
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount) {
            //Set error state to 'Please provide description and amount'
            this.setState(() => {
                return {
                    error: 'Please provide the description and amount properly'
                }
            })
        } else {
            //Clear the error
            this.setState(() => {
                return {
                    error: ''
                }
            })
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    } 
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>  }
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Description' autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                    <input value={this.state.amount} type='text' placeholder='Amount' onChange={this.onAmountChange}/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused} 
                        onFocusChange={this.onCalenderFocused} 
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea placeholder='Add a note for your expense (optional)' value={this.state.note} onChange={this.onNoteChange} ></textarea>
                    <button>{this.props.expense ? 'Update' : 'Add'}</button>
                </form>
            </div>
        )
    }
}