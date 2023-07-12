import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Root = ()=>{

    const loggedIn = useSelector((state: any)=>state.session)


    return(
        <>
            {loggedIn
            ?<Navigate to="/dashboard" replace={true} />
            :<Navigate to="/login" replace={true} />}
        </>
    )
}

export default Root;