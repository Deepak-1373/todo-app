import React, { useState, useEffect } from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos,setTodos] =  useState([]);
  const [input,setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() =>{
    //this code .. fires when the app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) =>{
    //this will fire off when we click the button
    event.preventDefault(); //will stop from refreshing the page when we click button
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); // clear up the input after submitting
  }

  return (
    <div className="App">
      <h1>Lets build a Todo App 🚀</h1>
      <form>
        <FormControl>
        <InputLabel>✅Write a todo</InputLabel>
        <Input type="text" value={input} onChange={event => setInput(event.target.value)}></Input>
        </FormControl>
        <Button disabled = {!input} type="submit" onClick={addTodo} variant="contained" color="primary">
            Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo =>(
          <Todo todo = {todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
