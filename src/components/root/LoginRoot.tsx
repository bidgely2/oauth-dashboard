import { Navigate } from "react-router-dom";

const Root = ()=>{
    const isLoggedIn = false;

    return(
        <>
            {isLoggedIn
            ?<Navigate to="/dashboard" replace={true} />
            :<Navigate to="/login" replace={true} />}
            
        </>
    )
}

export default Root;