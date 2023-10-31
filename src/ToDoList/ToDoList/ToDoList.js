import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoList.css'

function ToDoList({todo, button}) {

    if (todo && todo.length) {        
        return (
            <>
                <div className='listBox'>
                    {todo.map(item => (
                        <ToDoItem key={item.id} {...item} buttonRemove={() => {button(item.id)}}/>
                    ))}
                </div>
            </>
        )
    } 
}

export default ToDoList;