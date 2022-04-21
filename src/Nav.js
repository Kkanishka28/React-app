import React from "react";
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <div>
        <Link to="/home">Home page</Link>
        <br/>
        <Link to="/about">About page</Link>
        </div>
    )
}
export default Nav;