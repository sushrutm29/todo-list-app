import React, {useState} from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { db } from "../firebase/firebase_config";
import firebase from "firebase";

const useStyles = makeStyles({
    todoAddButton: {
        padding: "3px 6px"
    },
    todoAddText: {
        width: "150%"
    }
});

const TodoForm = () => {
    const classes = useStyles();
    const [todoInput, setTodoInput] = useState("");
    const [error, setError] = useState(false);

    const addTodo = (e) => {
        e.preventDefault();
        if(!todoInput || todoInput === "")
            setError(true);
        else{
            db.collection("todos").add({
                "completed": false,
                "timestamp": firebase.firestore.FieldValue.serverTimestamp(),
                "title": todoInput
            });
            setTodoInput("");
        }
    };

    return(
        <div className="todoFormComponent">
            <form className="todo-input-form" onSubmit={addTodo}>
                <TextField  
                    error = {error}
                    id="filled-error-helper-text" 
                    helperText={error && "Please enter a title"}
                    autoComplete='off'
                    label="Enter Todo" 
                    className={classes.todoAddText} 
                    value={todoInput} 
                    onChange={(e)=>{
                        setTodoInput(e.target.value);
                        setError(false);
                    }} 
                    inputProps={{maxLength: 32}}/>
                <Button variant="contained" color="primary" type="submit" className={classes.todoAddButton}>Add Todo</Button>
            </form>
        </div>
    );
};

export default TodoForm;