import React, { useState } from 'react';
import './ToDo.css';
import ToDoList from './ToDoList/ToDoList';

function ToDo() {
  const [valueTitle, setValueTitle] = useState('');
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);


  function onButtonClick() {
    if(value && valueTitle){
      const newTodo = { id: todos.length + 1, title: valueTitle, text: value};
      setTodos([...todos, newTodo]);
      setValueTitle(''); 
      setValue('');
    }
  }
  // const idItem = (todos) => {
  //   todos.map(item => {return item.id})
  // }
  function onButtonRemove (idToRemove) {
    const updatedItems = todos.filter(item => item.id !== idToRemove);
    setTodos(updatedItems);
  } 


  return (
    <>
      <div className='main_box'>
        <p className='text'>Title</p>
        <input
          className='inputToDo'            
          type='text'
          name='title'
          value={valueTitle} 
          onChange={(e) => {
            setValueTitle(e.target.value);
          }}></input>
        <p className='text'>Text</p>
        <input
          className='inputToDo'  
          type='text'
          name='todo'
          value={value} 
          onChange={(e) => {
            setValue(e.target.value);
          }}></input>
        <button className='buttonAdd' onClick={onButtonClick}>Add</button>
      </div>
      <ToDoList todo={todos} button={onButtonRemove}/>
    </>
  );
}

export default ToDo;