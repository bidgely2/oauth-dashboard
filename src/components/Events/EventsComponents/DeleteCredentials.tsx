import { Typography, Button } from "@mui/material";
import { EditBox } from "../../templates/EditBox";
import { EventSections } from "../../../__mock__/apis/OauthMocks/EventsInfo";
import axios from "../../../__mock__/apis/OauthMocks/EventsAPIs";
import { useNavigate } from "react-router-dom";

interface DeleteCredentialProps{
    props:EventSections
}


const DeleteCredentials =({props}:DeleteCredentialProps) =>{

    const navigate = useNavigate();

    const ClickDelete = ()=>{
        axios.delete("/api/v2.0/oauth-app",{params:{ClientId:1234}})
             .then((res)=>{console.log(res.data)});
        navigate("/dashboard");
    }

    return(
        <EditBox>
            <Typography variant="h6" sx={{ml:"30px",mb:"10px", fontFamily:"'Jost', sans-serif", fontSize:"25px", color:"#4F4557" }}>Delete Credentials</Typography>
            <Typography variant="subtitle2" sx={{ml:"40px",mb:"15px"}}>All the data related to app will be deleted permanently</Typography>
            <Button variant="contained" color="warning" sx={{ml:"40px",mb:"10px"}} onClick={ClickDelete}>Delete Application</Button>
        </EditBox>
    )
}

export default DeleteCredentials;