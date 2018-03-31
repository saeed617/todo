import React from 'react';
import { render } from 'react-dom';
import UserList from '../containers/UserList';
import PostList from '../containers/PostList';

class App extends React.Component {
  render(){
    return(
      <div className="container">
      <div className="row">
        <UserList />
        <PostList />
      </div>
    </div>
    )
  }
}

export default App;
