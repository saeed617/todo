import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';
import List from '../components/List';

const mapStateToProps = state => {
  return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

class ConnectedList extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){
    return(
      <List isFetching={this.props.posts.isFetching} list={this.props.posts.posts}/>
    );
  }
}
const PostList = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default PostList;
