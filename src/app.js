import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore()

store.dispatch(addExpense({
    description: 'Water Bill',
    note: 'Water expense',
    createdAt: 15316,
    amount: 5000
}))
store.dispatch(addExpense({
    description: 'Rent Bill',
    note: 'Hotel expense',
    createdAt: 5161,
    amount: 1256
}))
store.dispatch(addExpense({
    description: 'Gas Bill',
    note: 'Gas expense',
    createdAt: 1234,
    amount: 15234
}))


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

const appRoot = document.querySelector("#app");
ReactDOM.render(jsx,appRoot);  

