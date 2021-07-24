import { ListItem, ListItemText, Button, Modal, Fade, Backdrop} from '@material-ui/core'
import React, {useState} from 'react'
import {CheckBox, Cancel, Edit} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { green, red, blue } from '@material-ui/core/colors';
import { db } from "../firebase/firebase_config";
import EditTodo from './EditTodo';

const useStyles = makeStyles((theme) => ({
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
    editIcon: {
        color: blue[500],
        '&:hover':{
            transition: "color 400ms",
            color: blue[900],
            cursor: 'pointer'
        }
    },
    todoListItem: {
        width: '35vw'
    },
    listItemText: {
        margin: '2px 5px',
        width: '20vw'
    }
  }));

function TodoListItem(props) {
    const classes = useStyles();
    let itemTextComplete = null;
    let buttonTextComplete = null;
    const [open, setOpen] = useState(false);

    const toggleComplete = () => {
        db.collection("todos").doc(props.todo.id).update({
            completed: !props.todo.completed
        });
    };

    const deleteTodo = () => {
        db.collection("todos").doc(props.todo.id).delete();
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    itemTextComplete = props.todo.completed? "Completed" : "In Progress";
    buttonTextComplete = 
        props.todo.completed? 
            <Button color="primary" onClick={toggleComplete}>Mark incomplete</Button>: 
            <div>
                <CheckBox className={classes.completeIcon} onClick={toggleComplete}/>
                <Edit className={classes.editIcon} onClick={handleOpen}/>
                <Cancel className={classes.deleteIcon} onClick={deleteTodo}/>
            </div>

    return (
        <ListItem className={classes.todoListItem} key={props.todo.id}>
            <ListItemText primary={props.todo.title} secondary={itemTextComplete} className={classes.listItemText}/>
            {buttonTextComplete}
            <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            aria-labelledby="edit-modal-title"
            aria-describedby="edit-modal-description"
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 300,
            }}
            >
                <Fade in={open} timeout={ 100 }>
                    <EditTodo/>
                </Fade>
            </Modal>
        </ListItem>
    )
}

export default TodoListItem
