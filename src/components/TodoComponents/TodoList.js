// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    return (
        <div>
        <div className="class-list">
        {props.todos.map((currentValue, index) =>  (
            <Todo key={index} todo={currentValue} />
        ))}
          </div>  
        </div>  
    );
};
export default TodoList;