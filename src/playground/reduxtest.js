import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: description,
            note: note,
            amount: amount,
            createdAt: createdAt
        }
    }
}

const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        expenseId: id
    }
}

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}

const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}

const setStartDate = (date = undefined) => {
    return {
        type: 'SET_START_DATE',
        date
    }
}

const setEndDate = (date = undefined) => {
    return {
        type: 'SET_END_DATE',
        date
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().trim().includes(text.toLowerCase().trim())
    
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? 1 : -1
        }
    })
}

// Expenses Reducer
const expenseReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense)
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.expenseId)
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                } 
            })
        default: 
            return state
    }
}

const filterReducerDefaultState = {
    text: '', 
    sortBy: 'amount', 
    startDate: undefined, 
    endDate: undefined
}

// Filters Reducer
const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
              return {
                  ...state,
                  sortBy: 'amount'
              }
        case 'SORT_BY_DATE':
              return {
                  ...state,
                  sortBy: 'date'
              }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default: 
            return state
    }
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
)
