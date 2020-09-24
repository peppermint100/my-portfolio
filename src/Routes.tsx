import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

const Routes = () =>{
    return(
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
        </Router>
    )
}

export default Routes