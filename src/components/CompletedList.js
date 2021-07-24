import { List } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { db } from "../firebase/firebase_config";
import TodoListItem from './TodoListItem';

function CompletedList() {
    const [completedList, setCompletedList] = useState([]);
    let completedListItems = null;

    useEffect(() => {
        getCompletedTodos();
    }, []);

    const getCompletedTodos = () => {
        db.collection("todos").onSnapshot((querySnapshot) => {
            let newCompletedList = querySnapshot.docs.flatMap((doc) => {
                if(doc.data().completed)
                    return  {
                        "id": doc.id,
                        "title": doc.data().title,
                        "completed": doc.data().completed 
                    };
                else
                    return [];
            });
            setCompletedList(newCompletedList);
        });
    }

    completedListItems = completedList.map((todo) => (
        <TodoListItem todo={todo} key={todo.id}/>
    ));

    return (
        <div className="completedListComponent">
            <h2 className="completedListHeading">Completed Todos</h2>
            <List>
                {completedListItems}
            </List>
        </div>
    )
}

export default CompletedList
