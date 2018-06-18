import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'

test('should return set text filter action object with set value', () => {
    const textFilter = 'Rent'
    const action = setTextFilter(textFilter)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: textFilter
    })
})

test('should return set text filter action object with default value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should return sort by amount action object',() => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should return sort by date action object',() => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should return set start date action object with set value',() => {
    const date = moment(0)
    const action = setStartDate(date)
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: date
    })
})

test('should return set start date action object with default value',() => {
    const action = setStartDate()
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: undefined
    })
})

test('should return set end date action object with set value',() => {
    const date = moment(0)
    const action = setEndDate(date)
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: date
    })
})

test('should return set end date action object with default value',() => {
    const action = setEndDate()
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: undefined
    })
})
