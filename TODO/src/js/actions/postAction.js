export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
import fetch from 'cross-fetch';
// export function selectUser(id){
//   return {
//     type: SELECT_USER,
//     payload: {id}
//   }
// }
export function requestPosts(){
  return {
    type: REQUEST_POSTS
  }
}

export function receivePosts(json) {
  // console.log(json);
  return {
    type: RECEIVE_POSTS,
    payload: {
      posts: json,
      receivedAt: Date.now()
    }
  }
}


export function fetchPosts() {
  return function (dispatch) {
    dispatch(requestPosts());

    return fetch('http://127.0.0.1:8000/api/posts/?format=json')
      .then(
        response => response.json(),
        error => console.log('An error occurred', error)
      )
      .then(json =>
        dispatch(receivePosts(json))
      )
  }
}
