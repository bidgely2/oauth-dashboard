import { Typography, Button } from "@mui/material";
import { EditBox } from "../../templates/EditBox";
import { EventSections } from "../../../__mock__/apis/EventsInfo";

interface DeleteCredentialProps{
    props:EventSections
}

const DeleteCredentials =({props}:DeleteCredentialProps) =>{
    return(
        <EditBox>
            <Typography variant="h6" sx={{ml:"20px",mb:"10px", fontFamily:"'Jost', sans-serif"}}>Delete Credentials</Typography>
            <Typography variant="subtitle2" sx={{ml:"40px",mb:"15px"}}>All the data related to app will be deleted permanently</Typography>
            <Button variant="contained" color="warning" sx={{ml:"40px",mb:"10px"}}>Delete Application</Button>
        </EditBox>
    )
}

export default DeleteCredentials;