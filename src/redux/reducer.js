import { STAFFS,DEPARTMENTS } from '../shared/staffs';
import {action} from '../components/StaffListComponent'
export const initialState = {
  staffs:STAFFS,
  departments:DEPARTMENTS
}

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STAFF':
    let newStaff = action.payload;
    let newState = state.staffs.push(JSON.parse(newStaff));
    return newState;
  default:
      return state;

  }
};
