import { Typography, Button } from "@mui/material";
import { EditBox } from "../../templates/EditBox";
import { EventsInterface } from "../../../__mock__/apis/OauthMocks/ClientsInfo";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../context/GlobalContext";
import PopupWarning from "../../templates/PopupWarning";
import { useState } from "react";
import styles from "./Client.module.css"

interface DeleteCredentialProps{
    props:EventsInterface
}

const DeleteCredentials =({props}:DeleteCredentialProps) =>{

    const {rc} = useGlobalContext();

    const navigate = useNavigate();

    const [del, setDel] = useState({open:false,clickedYes:false}); 

    const ClickDelete = ()=>{
        setDel({open:true,clickedYes:false});
    }
    
    if(del.clickedYes){
        rc.apiClient.delete("/api/v2.0/oauth-app/delete",{params:{requestId:123}})
             .then((res)=>{console.log(res.data)});
        navigate("/dashboard");
    }

    return(
        <EditBox>
            <Typography className={styles.title}>Delete Credentials</Typography>
            <Typography sx={{ml:"30px",mb:"15px", typography:"body2"}}>All the data related to app will be deleted permanently</Typography>
            <Button variant="contained" color="warning" sx={{ml:"30px",mb:"10px"}} onClick={ClickDelete}>Delete Application</Button>
            <PopupWarning open={del} setOpen={setDel} message="The App will be deleted permanently" />
        </EditBox>
    )
}

export default DeleteCredentials;