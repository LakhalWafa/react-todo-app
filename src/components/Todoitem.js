import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div
        style={this.getStyle()}
        className="list-group-item list-group-item-secondary"
      >
        <div className="myDiv">
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            className="btn btn-outline-dark"
            style={{ borderRadius: '50%', marginLeft: '67vw' }}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

//PropTypes

Todoitem.propTypes = {
  todos: PropTypes.object.isRequired
};

export default Todoitem;
