import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Staffs } from './staffs';
import { Departments } from './departments';

export const configureStore = () => {
    const store = createStore(
      combineReducers({
            staffs: Staffs,
            departments: Departments
        }),
      applyMiddleware(thunk, logger)
    );

    return store;
}
