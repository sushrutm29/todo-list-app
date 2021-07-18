import React from 'react'
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div className="error404Component">
            <h1 className="error404Message">Error 404: This page does not seem to exist!</h1>
            <Link className="errorHomeLink" to="/home"><Button color='primary' variant="contained">Go to home</Button></Link>
        </div>
    )
}

export default Error404
