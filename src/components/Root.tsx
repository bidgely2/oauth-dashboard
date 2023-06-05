import { Navigate } from "react-router-dom";
import Login from "./Login";

function Root(){

    const isLoggedIn = false;

    return(
        {isLoggedIn}
        ?<Navigate to="/dashboard" replace />
        :<Navigate to="login" replace />
    )
}

export default Root;