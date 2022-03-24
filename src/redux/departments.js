import * as ActionTypes from './ActionTypes';

export const Departments = (state = { isLoading: true,
    errMess: null,
    departments:[]}, action) => {
    switch (action.type) {
        //Trả về payload
        case ActionTypes.ADD_DEPARTMENTS:
            return {...state, isLoading: false, errMess: null, departments: action.payload};

        //Trả về loading
        case ActionTypes.DEPARTMENTS_LOADING:
            return {...state, isLoading: true, errMess: null, departments: []}

        //Trả về lỗi
        case ActionTypes.DEPARTMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        //Trả về State
        default:
            return state;
    }
};
