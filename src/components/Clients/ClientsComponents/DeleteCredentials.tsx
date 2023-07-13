import { Typography, Button } from "@mui/material";
import { EditBox } from "../../templates/EditBox";
import { ClientsInterface } from "../../../__mock__/apis/OauthMocks/ClientsInfo";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../context/GlobalContext";
import PopupWarning from "../../templates/PopupWarning";
import { useState } from "react";
import {Title} from "./title/title"
import { DeleteOutlined as Delete } from "@mui/icons-material";

interface DeleteCredentialProps{
    props:ClientsInterface
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
            <Title >Delete Credentials</Title>
            <Typography sx={{mb:"15px",mt:"7px",typography:"body2"}}>All the data related to app will be deleted permanently</Typography>
            <Button variant="outlined" color="error" sx={{mb:"10px"}} onClick={ClickDelete} startIcon={<Delete/>}>Delete Application</Button>
            <PopupWarning open={del} setOpen={setDel} message="The Application will be deleted permanently" />
        </EditBox>
    )
}

export default DeleteCredentials;