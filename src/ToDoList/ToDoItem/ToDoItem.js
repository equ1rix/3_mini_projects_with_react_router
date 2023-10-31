import React from "react";
import './ToDoItem.css'

function ToDoItem({ id, title, text, buttonRemove}) {


    

    if (id && title && text) {
            return (
        <div className="todoBox">
            <div className="todoItems">
                <p contenteditable='plaintext-only' className="title">{title}</p>
                <p contenteditable='plaintext-only' className="text">{text}</p>
                <button className="buttonToDo" onClick={() => buttonRemove(id)}>Remove This ToDo</button> 
            </div>
        </div>
    ) 
    }




}

export default ToDoItem;