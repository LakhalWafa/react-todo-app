import React, { Component } from 'react';

export class Addtodo extends Component {
  state = {
    title: ''
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <div class="input-group input-group-lg mt-5">
          <input
            type="text"
            name="title"
            placeholder="Add Todo..."
            value={this.state.title}
            onChange={this.onChange}
            style={{ flex: '10' }}
            className="form-control"
          />

          <input
            type="submit"
            value="Submit"
            style={{ flex: '1' }}
            className="btn btn-dark"
          />
        </div>
      </form>
    );
  }
}

export default Addtodo;
