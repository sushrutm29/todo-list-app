import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import CompletedList from './CompletedList';

function Home(){
    return(
        <div className="homeComponent">
            <h1>Todo List app by Sushrut</h1>
            <TodoForm/>
            <TodoList/>
            <CompletedList/>
        </div>
    );
}

export default Home;