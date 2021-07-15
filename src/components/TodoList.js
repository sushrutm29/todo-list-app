import { List } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { db } from "../firebase/firebase_config";
import TodoListItem from './TodoListItem';

function TodoList(){
    const [todoList, setTodoList] = useState([]);
    let todoListItems = null;

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = () => {
        db.collection("todos").onSnapshot((querySnapshot) => {
            let newTodoList = querySnapshot.docs.map((doc) => ({
                "id": doc.id,
                "title": doc.data().title,
                "completed": doc.data().completed 
            }));
            setTodoList(newTodoList);
        });
    }

    todoListItems = todoList.map((todo) => (
        <TodoListItem todo={todo} />
    ));

    return(
        <div className="todoListComponent">
            <List>
                {todoListItems}
            </List>
        </div>
    );
}

export default TodoList;