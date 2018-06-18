import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should add new expense to state', () => {
    const expense = {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 1961,
        createdAt: 125125
    }
    const result = expenseReducer([], { type: 'ADD_EXPENSE', expense: expense})
    expect(result).toEqual([
        expense
    ])
})

test('should remove expense from state', () => {
    const result = expenseReducer([...expenses], { type: 'REMOVE_EXPENSE', expenseId: '3'})
    expect(result).toEqual([
        expenses[0],
        expenses[1],
        expenses[3]
    ])
})

test('should not remove expense if id not found', () => {
    const result = expenseReducer(expenses, { type: 'REMOVE_EXPENSE', expenseId: '-1'})
    expect(result).toEqual([
        ...expenses
    ])
})

test('should return state with edited expense', () => {
    const result = expenseReducer(expenses, { type: 'EDIT_EXPENSE', id: '4', updates: { note: 'Test note'}})
    expect(result).toEqual([
        expenses[0],
        expenses[1],
        expenses[2],
        {
            id: '4',
            description: 'Telephone',
            note: 'Test note',
            amount: 1215,
            createdAt: 61217
        }
    ])
})

test('should not edit expense if id not found', () => {
    const result = expenseReducer(expenses, { type: 'EDIT_EXPENSE', expenseId: '-1'})
    expect(result).toEqual([
        ...expenses
    ])
})