import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      task: "",
      id: 545484,
      completed: false
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      toDoItems: [
        ...this.state.todos,
        {
          task: this.state.task,
          id: 545454,
          completed: false 
        }
      ],

     task: "" 
    });
}
    
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm
        task={this.state.task}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
      </div>
    );
    };
  };
 

export default App;
