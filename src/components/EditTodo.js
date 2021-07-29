import React, {useState} from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { db } from "../firebase/firebase_config";

const useStyles = makeStyles((theme) => ({
    editTodoComponent: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      outline: 0
    },
    todoEditButton: {
        padding: "3px 6px"
    },
    todoEditText: {
        width: "90%"
    }
}));

function EditTodo(props) {
    const classes = useStyles();
    const [title, setTitle] = useState(props.todo.title);
    const [error, setError] = useState(false);

    const editTodo = (e) => {
        e.preventDefault();
        if(!title || title === "")
            setError(true);
        else{
            db.collection("todos").doc(props.todo.id).update({title: title});
            props.close();
        }
    }

    return (
        <div className={classes.editTodoComponent}>
            <form className="todo-input-form" onSubmit={editTodo}>
                <TextField 
                    error = {error}
                    id="filled-error-helper-text" 
                    helperText={error && "Please enter a title"}
                    className={classes.todoEditText} 
                    autoComplete='off'
                    label="Enter Todo" 
                    value={title} 
                    onChange={(e)=>{
                        setTitle(e.target.value);
                        setError(false);
                    }}
                    inputProps={{maxLength: 32}}/>
                <Button variant="contained" color="primary" type="submit" className={classes.todoEditButton}>Edit Todo</Button>
            </form>
        </div>
    )
}

export default EditTodo
