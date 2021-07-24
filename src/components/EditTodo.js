import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
}));

function EditTodo(props) {
    const classes = useStyles();

    return (
        <div className={classes.editTodoComponent}>
            <p>Edit Todo Here</p>
        </div>
    )
}

export default EditTodo
