import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";


export default function RouterWrapper({
    component: Component,
    isPrivate,
    ...rest
}){
    const {signed, loading} = useContext(UserContext);

    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed && isPrivate){
        return <Redirect to = "/" />
    }

    if(signed && !isPrivate){
        return <Redirect to="/dashboard" />
    }

    return(
        <Route
            {...rest}
            render = {
                props => (<Component {...props} /> )
            }

        />
    )
}