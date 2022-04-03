import {Switch} from "react-router-dom";
import Route from "./Route"

import SignIn from "../pages/SignIn.js";
import SignUp from "../pages/SignUp.js/index.js";

import Dashboard from "../pages/Dashboard/index";
import Profile from "../pages/Profile";
import Customers from "../pages/Customers"
import New from "../pages/New"

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/profile" component={Profile} isPrivate/>
            <Route exact path="/customer" component={Customers} isPrivate/>
            <Route exact path="/new" component={New} isPrivate/>
            <Route exact path="/dashboard" component={Dashboard} isPrivate/>
        </Switch>
    )
}