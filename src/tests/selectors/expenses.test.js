import getVisibleExpenses from '../../selectors/expenses.js';
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('should filter by text value', () => {
    const filter = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses,filter)
    expect(result).toEqual([
        expenses[1],
        expenses[3]
    ])
})

test('should filter by start date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined 
    }
    const result = getVisibleExpenses(expenses,filter)
    expect(result).toEqual([
        expenses[1],
        expenses[0],
        expenses[2],
        expenses[3]
    ])
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(1621)
    }
    const results = getVisibleExpenses(expenses, filters)
    expect(results).toEqual([
        expenses[1],
        expenses[0],
        expenses[2]
    ])
})

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const results = getVisibleExpenses(expenses,filters)
    expect(results).toEqual([
        expenses[1],
        expenses[0],
        expenses[2],
        expenses[3]
    ])
})

test('should sort by amount',() => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const results = getVisibleExpenses(expenses,filters)
    expect(results).toEqual([
        expenses[2],
        expenses[3],
        expenses[0],
        expenses[1]
    ])
})