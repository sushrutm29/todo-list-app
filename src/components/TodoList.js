import React, {useState, useEffect} from 'react';
import { db } from "../firebase/firebase_config";
import TodoListItem from './TodoListItem';

function TodoList(){
    const [todoList, setTodoList] = useState([]);

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

    return(
        <div className="todoListComponent">
            {todoList.map((todo) => (
                <TodoListItem todo={todo} />
            ))}
        </div>
    );
}

export default TodoList;