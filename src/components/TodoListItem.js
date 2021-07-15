import { ListItem, ListItemText, Button} from '@material-ui/core'
import React from 'react'
import {CheckBox, Cancel} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import { db } from "../firebase/firebase_config";

const useStyles = makeStyles(() => ({
    completeIcon: {
        color: green[500],
        '&:hover':{
            transition: "color 400ms",
            color: green[900],
            cursor: 'pointer'
        }
    },
    deleteIcon: {
        color: red[500],
        '&:hover':{
            transition: "color 400ms",
            color: red[900],
            cursor: 'pointer'
        }
    },
    todoListItem: {
        width: '28vw'
    },
    listItemText: {
        margin: '2px 5px',
        width: '10vw'
    }
  }));

function TodoListItem(props) {
    const classes = useStyles();
    let itemTextComplete = null;
    let buttonTextComplete = null;

    const toggleComplete = () => {
        db.collection("todos").doc(props.todo.id).update({
            completed: !props.todo.completed
        });
    };

    const deleteTodo = () => {
        db.collection("todos").doc(props.todo.id).delete();
    }

    itemTextComplete = props.todo.completed? "Completed" : "In Progress";
    buttonTextComplete = 
        props.todo.completed? 
            <Button color="primary" onClick={toggleComplete}>Mark incomplete</Button> : 
            <CheckBox className={classes.completeIcon} onClick={toggleComplete}/>

    return (
        <ListItem className={classes.todoListItem}>
            <ListItemText primary={props.todo.title} secondary={itemTextComplete} className={classes.listItemText}/>
            {buttonTextComplete}
            <Cancel className={classes.deleteIcon} onClick={deleteTodo}/>
        </ListItem>
    )
}

export default TodoListItem
