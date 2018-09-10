import _ from 'lodash';
import React from "react";
import ToDoListHeader from './todolist-header.jsx';
import ToDoListItem from './todolist-item.jsx';

export default class ToDoList extends React.Component {
    renderItems(){
        return _.map(this.props.todos, (todo, index) => <ToDoListItem key={index}
                                                                     {...todo}/>);

    }

    render (){
        return (
            <table>
                <ToDoListHeader/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}