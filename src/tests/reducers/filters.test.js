import filtersReducer from '../../reducers/filters'
import moment from 'moment'

const defaultState =  {
    text: '', 
    sortBy: 'amount', 
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month')
}

test('should return state with default values', () => {
    const result = filtersReducer(undefined, { type: '@@INIT'})
    expect(result).toEqual(defaultState)
})

test('should return state with text filter', () => {
    const text = 'Rent'
    const result = filtersReducer(defaultState, { type: 'SET_TEXT_FILTER', text: text})
    expect(result).toEqual({
        ...defaultState,
        text: text
    })
})

test('should sort state by amount', () => {
    const result = filtersReducer(defaultState, { type: 'SORT_BY_AMOUNT'})
    expect(result).toEqual({
        ...defaultState, 
        sortBy: 'amount'
    })
})

test('should sort state by date', () => {
    const result = filtersReducer(defaultState, { type: 'SORT_BY_DATE'})
    expect(result).toEqual({
        ...defaultState, 
        sortBy: 'date'
    })
})

test('should set start date for state', () => {
    const sDate = moment(0)
    const result = filtersReducer(defaultState, { type: 'SET_START_DATE', date: sDate})
    expect(result).toEqual({
        ...defaultState,
        startDate: sDate
    })
})

test('should set end date for state', () => {
    const eDate = moment(0)
    const result = filtersReducer(defaultState, { type: 'SET_END_DATE', date: eDate})
    expect(result).toEqual({
        ...defaultState, 
        endDate: eDate
    })
})