import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';
import List from '../components/List';

const mapStateToProps = state => {
  return { users: state.users };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

class ConnectedList extends React.Component {
  componentWillMount(){
    this.props.fetchUsers();
  }
  render(){
    return(
      <div>
      <List isFetching={this.props.users.isFetching} list={this.props.users.users}/>
      </div>
    );
  }
}
const UserList = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default UserList;
