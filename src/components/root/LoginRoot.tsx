import { useGlobalContext } from "../../context/GlobalContext";
import { Navigate } from "react-router-dom";

const Root = ()=>{

    const {loggedIn} = useGlobalContext();

    return(
        <>
            {loggedIn
            ?<Navigate to="/dashboard" replace={true} />
            :<Navigate to="/login" replace={true} />}
            
        </>
    )
}

export default Root;