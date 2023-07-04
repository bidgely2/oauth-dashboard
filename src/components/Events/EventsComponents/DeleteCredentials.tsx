import { Typography, Button } from "@mui/material";
import { EditBox } from "../../templates/EditBox";
import { EventsInterface } from "../../../__mock__/apis/OauthMocks/EventsInfo";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../context/GlobalContext";
import PopupWarning from "../../templates/PopupWarning";
import { useState } from "react";

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
            <Typography variant="h6" sx={{ml:"30px",mb:"10px", fontFamily:"'Jost', sans-serif", fontSize:"25px", color:"#4F4557" }}>Delete Credentials</Typography>
            <Typography variant="subtitle2" sx={{ml:"40px",mb:"15px"}}>All the data related to app will be deleted permanently</Typography>
            <Button variant="contained" color="warning" sx={{ml:"40px",mb:"10px"}} onClick={ClickDelete}>Delete Application</Button>
            <PopupWarning open={del} setOpen={setDel} message="The App will be deleted permanently" />
        </EditBox>
    )
}

export default DeleteCredentials;