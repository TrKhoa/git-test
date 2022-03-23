import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addStaff = (staff) => ({
    type: ActionTypes.ADD_STAFF,
    payload: staff
});

export const postStaff = (name, dob, salaryScale, startDate, department, annualLeave, overTime, image) => (dispatch) => {

  const newStaff = {
    name: name,
    dob: dob,
    salaryScale: salaryScale,
    startDate: startDate,
    department: department,
    annualLeave: annualLeave,
    overTime: overTime,
    image: image
  };

  return fetch(baseUrl + 'staffs', {
      method: "POST",
      body: JSON.stringify(newStaff),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response =>{
    if (response.ok) {
      return response;
    } else {
    var error = new Error('Error' + response.status + ':' + response.statusText);
    error.response = response;
    throw error;
  }
  },
    error => {
          throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(addStaff(response)))
    .catch(error =>  {alert('Your comment could not be posted\nError: '+error.message); });
};

export const fetchStaff = () => (dispatch) => {

    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
    .then(response => {
        if (response.ok) {
          console.log(response);
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(staffs => dispatch(addStaffs(staffs)))
    .catch(error => dispatch(staffsFailed(error.message)));
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

    return fetch(baseUrl + 'departments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(departments => dispatch(addDepartments(departments)))
    .catch(error => dispatch(departmentsFailed(error.message)));
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
