import React, {useState} from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { db } from "../firebase/firebase_config";
import firebase from "firebase";

const useStyles = makeStyles({
    todoAddButton: {
        padding: "3px 6px"
    } 
});

const TodoForm = () => {
    const classes = useStyles();
    const [todoInput, setTodoInput] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        db.collection("todos").add({
            "completed": false,
            "timestamp": firebase.firestore.FieldValue.serverTimestamp(),
            "title": todoInput
        });
        setTodoInput("");
    };

    return(
        <div className="todoFormComponent">
            <form className="todo-input-form" onSubmit={addTodo}>
                <TextField id="standard-basic" label="Enter Todo" value={todoInput} onChange={(e)=>setTodoInput(e.target.value)}/>
                <Button variant="contained" color="primary" type="submit" className={classes.todoAddButton}>Add Todo</Button>
            </form>
        </div>
    );
};

export default TodoForm;