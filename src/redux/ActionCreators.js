import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//Thêm nhân viên vào render
export const addStaff = (staff) => ({
    type: ActionTypes.ADD_STAFF,
    payload: staff
});

//Lấy data đưa vào db
export const postStaff = (name, dob, salaryScale, startDate, department, annualLeave, overTime, image) => (dispatch) => {

  const newStaff = {
    name: name,
    doB: dob,
    salaryScale: salaryScale,
    startDate: startDate,
    departmentId: department,
    annualLeave: annualLeave,
    overTime: overTime,
    image: image
  };

  //Thêm nhân viên với phương thức POST
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

//Lấy data Nhân viên
export const fetchStaff = () => (dispatch) => {

    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
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
    .then(staff => dispatch(addStaff(staff)))
    .catch(error => dispatch(staffsFailed(error.message)));
}

//Loading khi chưa nhận data
export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

//Trả về error
export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});

//Lấy data phòng ban
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

//Loading khi chưa nhận data
export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
});

//Trả về error
export const departmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
});

//Thêm vào render
export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
});
