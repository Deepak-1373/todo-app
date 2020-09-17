import React from 'react';
import { List,ListItem,ListItemText,Button } from '@material-ui/core'; 
import db from './firebase';
import './Todo.css';

function Todo(props) {
	return (
		<List className="todo">
			<ListItem>
			<ListItemText  primary = {props.todo.todo} secondary="Dummy deadline⏳" />
			</ListItem>
			<Button onClick={event => db.collection('todos').doc(props.todo.id).delete()} >❌Delete Me</Button>
		</List>
	)
}

export default Todo