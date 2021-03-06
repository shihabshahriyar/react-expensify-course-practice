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

export default expenseReducer