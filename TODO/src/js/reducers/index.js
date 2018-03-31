import { REQUEST_USERS, RECEIVE_USERS} from '../actions/index';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/postAction';
import { combineReducers } from 'redux';

function users(state={
  isFetching: false,
  users: []
  },
  action
) {
    switch (action.type) {
      case REQUEST_USERS:
        return Object.assign({}, state, {
          isFetching: true
        })
      case RECEIVE_USERS:
        return Object.assign({}, state, {
          isFetching: false,
          users: action.payload.users
        })
      default:
        return state
    }
}

function posts(state={
    isFetching: false,
    posts: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.payload.posts
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  users,
  posts
})

export default rootReducer;
