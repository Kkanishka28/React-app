import React from "react";
import {Route,Routes} from "react-router-dom"
import Nav from './Nav'
import Home from "./Home";
import About from "./About";
function Rout(){
    return(
        <div>
      
             <Nav/>
                <Routes>
                <Route exact path='/about' element={<About />} />
                <Route exact={true} path='/home' element={<Home />} />

              </Routes>
              {/* <Route path="/home"><Home/></Route>
              <Route path="/about"><About/></Route> */}
            
              

        </div>
    )
}


export default Rout;