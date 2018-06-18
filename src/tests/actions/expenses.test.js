import { addExpense, removeExpense, editExpense } from '../../actions/expenses.js'

test('should return a remove action object', () => {
  const id = '12asfsb2'
  const action = removeExpense(id)
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    expenseId: id
  })
})

test('should return a edit action object',() => {
  const id = '15bd123'
  const newObj = {
    welp: 'agw'
  }
  const action = editExpense(id, newObj)
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id : id,
    updates: newObj
  })
})

test('should return an add action object with set values', () => {
  const newObj = {
    description: 'Test desc',
    note: 'Test note',
    amount: 0,
    createdAt: 0
  }
  const action = addExpense(newObj)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...newObj,
      id: expect.any(String)
    }
  })
})

test('should return add action object with default values', () => {
  const defaultObj = {
  description: '',
  note: '',
  amount: 0,
  createdAt: 0
}
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...defaultObj,
      id: expect.any(String)
    }
  })
})
