import { Box, Typography, Button } from "@mui/material";
import { EditBox } from "../../templates/EditBox";
import PasswordGrant from "./GrantTypeTabs/PasswordGrant";
import AuthCodeGrant from "./GrantTypeTabs/AuthCodeGrant";
import { useState } from "react";
import styles from "./client.module.css"

interface GrantTypeManagementProps{
    GrantManagement:any
}

const GrantTypeManagement =({GrantManagement}:GrantTypeManagementProps) =>{

    const [Tab,setTab] = useState(<PasswordGrant username={GrantManagement.PasswordGrant.username} password={GrantManagement.PasswordGrant.password}/>);

    const ClickTab =(e:any)=>{

        const activeTab = e.target.name;
        const ele = document.getElementsByName(activeTab);
        ele[0].style.backgroundColor="#FFFFFF"
        if(activeTab==="PswdGrant"){
            document.getElementsByName("AuthGrant")[0].style.backgroundColor = "#FAF7F0"
            setTab(<PasswordGrant username={GrantManagement.PasswordGrant.username} password={GrantManagement.PasswordGrant.password}/>)
        }
        else{
            document.getElementsByName("PswdGrant")[0].style.backgroundColor = "#FAF7F0"
            setTab(<AuthCodeGrant AppDomain={GrantManagement.AuthGrant.AppDomain}/>)
        }
    }

    return(
        <EditBox >
            <Typography className={styles.title}>Oauth Grant Type Management</Typography>
            <Box sx={{ml:"100px"}}>
                <Button name="PswdGrant" onClick={ClickTab} sx={{width:"110px", textTransform: "none",border:"1px #97C4B8",borderStyle:"solid", bgcolor:"#FFFFFF", ":hover":{bgcolor:"#EFF5F5"}, ":focus":{bgcolor:"#FFFFFF"}}}>Password Grant</Button>
                <Button name="AuthGrant" onClick={ClickTab} sx={{width:"110px", textTransform: "none",border:"1px #97C4B8",borderStyle:"solid", bgcolor:"#FAF7F0", ":hover":{bgcolor:"#EFF5F5"}, ":focus":{bgcolor:"#FFFFFF"}}}>AuthCode Grant</Button>
                {Tab}
            </Box>
        </EditBox>
    )
}

export default GrantTypeManagement;