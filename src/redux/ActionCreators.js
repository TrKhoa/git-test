import * as ActionTypes from './ActionTypes';
import { STAFFS } from '../shared/staffs';
import { DEPARTMENTS } from '../shared/staffs';

export const addStaff = (staffId, name, dob, salaryScale, startDate, department, annualLeave, overTime, image) => ({
    type: ActionTypes.ADD_STAFF,
    payload: {
        id: staffId,
        name: name,
        dob: dob,
        salaryScale: salaryScale,
        startDate: startDate,
        department: department,
        annualLeave: annualLeave,
        overTime: overTime,
        image: image
      }
});

export const fetchStaff = () => (dispatch) => {

    dispatch(staffsLoading(true));

    setTimeout(() => {
        dispatch(addStaffs(STAFFS));
    }, 2000);
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
});

export const fetchDepartment = () => (dispatch) => {

    dispatch(departmentsLoading(true));

    setTimeout(() => {
        dispatch(addDepartments(DEPARTMENTS));
    }, 2000);
}

export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
});

export const departmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
});

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
});
