import React from 'react';


class List extends React.Component{
  render() {
    return(
      <div className='col-sm-6'>
      {this.props.isFetching && <div className="loader"></div>}
        <ul className="list-group">
          {this.props.list.map(el => (
            <li className="list-group-item" key={el.id}>{el.username}{el.title }</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default List;
