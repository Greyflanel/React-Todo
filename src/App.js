import React from 'react';
import TodoForm from './TodoForm.js';



const todos = [ {
task: 'Organize Garage',
id: Date.now,
completed: false
},
{
  task:'Bake Cookies',
  id: Date.now,
  completed: false
},
{
  task: 'Clean House',
  id: Date.now,
  completed: false
}];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItems: todos,
      task: "",
      id: Date.now,
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
        ...this.state.toDoItems,
        {
          task: this.state.task,
          id: Date.now(),
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
        <p>My parentheses</p>
      </div>
    );
    }
  }
 

export default App;
