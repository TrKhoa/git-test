import * as ActionTypes from './ActionTypes';

export const Staffs = (state = { isLoading: true,
    errMess: null,
    staffs:[]}, action) => {
    switch (action.type) {

        //Trả về Loading
        case ActionTypes.STAFFS_LOADING:
            return {...state, isLoading: true, errMess: null, staffs: []}

        //Trả vể lỗi
        case ActionTypes.STAFFS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        //Trả về payload
        case ActionTypes.ADD_STAFF:
            return {...state, isLoading: false, errMess: null, staffs:action.payload}

        //Trả về State
        default:
            return state;
    }
};
