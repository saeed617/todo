export const SELECT_USER = "SELECT_USER";
export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
import fetch from 'cross-fetch';
// export function selectUser(id){
//   return {
//     type: SELECT_USER,
//     payload: {id}
//   }
// }
export function requestUsers(){
  return {
    type: REQUEST_USERS
  }
}

export function receiveUsers(json) {
  return {
    type: RECEIVE_USERS,
    payload: {
      users: json,
      receivedAt: Date.now()
    }
  }
}


export function fetchUsers() {
  return function (dispatch) {
    dispatch(requestUsers());

    return fetch('http://127.0.0.1:8000/api/users/?format=json')
      .then(
        response => response.json(),
        error => console.log('An error occurred', error)
      )
      .then(json =>
        dispatch(receiveUsers(json))
      )
  }
}
