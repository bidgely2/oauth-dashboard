import { Box, Typography, Button, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { EditBox } from "../../templates/EditBox";
import PasswordGrant from "./GrantTypeTabs/PasswordGrant";
import AuthCodeGrant from "./GrantTypeTabs/AuthCodeGrant";
import ClientCredentials from "./GrantTypeTabs/ClientCredentials";
import { useState } from "react";

interface GrantTypeManagementProps{
    GrantManagement:any
}

const GrantTypeManagement =({GrantManagement}:GrantTypeManagementProps) =>{

    const [Tab,setTab] = useState(<PasswordGrant username={GrantManagement.PasswordGrant.username} password={GrantManagement.PasswordGrant.password}/>);

    const ClickTab =(e:any)=>{

        const activeTab = e.target.name;
        if(activeTab==="PswdGrant"){
            setTab(<PasswordGrant username={GrantManagement.PasswordGrant.username} password={GrantManagement.PasswordGrant.password}/>)
        }
        else if(activeTab==="AuthGrant"){
            document.getElementById("pd")
            setTab(<AuthCodeGrant AppDomain={GrantManagement.AuthGrant.AppDomain}/>)
        }
        else{
            setTab(<ClientCredentials />)
        }
    }

    return(
        <EditBox>
            <Typography variant="h6" sx={{ml:"20px",mb:"10px", fontFamily:"'Jost', sans-serif"}}>Oauth Grant Type Management</Typography>
            <Box sx={{ml:"100px"}}>
                <Button name="PswdGrant" onClick={ClickTab} sx={{width:"110px", textTransform: "none",border:"1px #97C4B8",borderStyle:"solid", bgcolor:"#F8E8EE", ":hover":{bgcolor:"#fcfcfc"}, ":focus":{bgcolor:"#fcfcfc"}}}>Password Grant</Button>
                <Button name="AuthGrant" onClick={ClickTab} sx={{width:"110px", textTransform: "none",border:"1px #97C4B8",borderStyle:"solid", bgcolor:"#F8E8EE", ":hover":{bgcolor:"#fcfcfc"}, ":focus":{bgcolor:"#fcfcfc"}}}>AuthCode Grant</Button>
                <Button name="ClientCredentials" onClick={ClickTab} sx={{width:"110px", textTransform: "none",border:"1px #97C4B8",borderStyle:"solid", bgcolor:"#F8E8EE", ":hover":{bgcolor:"#fcfcfc"}, ":focus":{bgcolor:"#fcfcfc"}}}>Client Credentials</Button>
                {Tab}
            </Box>
        </EditBox>
    )
}

export default GrantTypeManagement;