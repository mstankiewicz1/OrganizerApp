import React from 'react';
import TodosList from './create-todo.jsx';
import ToDoList from './todolist.jsx';


const todos = [
    {
      task: 'make React tutorial',
      isCompleted: false
    },
    {
     task: 'eat dinner',
     isCompleted: true
    }
];

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            todos
        };
    }

    render (){
        return (
            <div>
                <h1>OrganizerApp</h1>
                <TodosList/>
                <ToDoList
                    todos={this.state.todos}
                    createTask={this.createTask.bind(this)}/>
            </div>
        );
    }
    createTask(task){
    }
}