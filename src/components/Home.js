import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Home(){
    return(
        <div className="homeComponent">
            <h1>Todo List app by Sushrut</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    );
}

export default Home;