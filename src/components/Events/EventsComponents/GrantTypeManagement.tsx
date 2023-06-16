import { Box, Typography } from "@mui/material";
import { EditBox } from "../../templates/EditBox";

interface GrantTypeManagementProps{
    GrantManagement:any
}

const GrantTypeManagement =({GrantManagement}:GrantTypeManagementProps) =>{
    return(
        <EditBox>
            <Typography variant="h6" sx={{ml:"20px",mb:"10px", fontFamily:"'Jost', sans-serif"}}>Oauth Grant Type Management</Typography>

        </EditBox>
    )
}

export default GrantTypeManagement;