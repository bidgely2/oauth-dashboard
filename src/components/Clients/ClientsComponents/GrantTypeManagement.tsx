import { Box, Tab } from "@mui/material";
import {TabList, TabContext, TabPanel} from "@mui/lab"
import { EditBox } from "../../templates/EditBox";
import PasswordGrant from "./GrantTypeTabs/PasswordGrant";
import AuthCodeGrant from "./GrantTypeTabs/AuthCodeGrant";
import { useState } from "react";
import {Title} from "./title/title"

interface GrantTypeManagementProps{
    GrantManagement:any
}

const GrantTypeManagement =({GrantManagement}:GrantTypeManagementProps) =>{

    const [tabValue,setTabValue] = useState("1");

    const ClickTab =(e:any,newValue:string)=>{
        setTabValue(newValue);
    }

    return(
        <EditBox >
            <Title >Oauth Grant Type Management</Title>
            <Box sx={{mt:"15px"}}>
                <TabContext value={tabValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <TabList onChange={ClickTab}>
                            <Tab label="Password Grant" value="1" sx={{textTransform:"none"}}/>
                            <Tab label="AuthCode Grant" value="2" sx={{textTransform:"none"}}/>
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{pl:"0"}}><PasswordGrant username={GrantManagement.PasswordGrant.username} password={GrantManagement.PasswordGrant.password}/></TabPanel>
                    <TabPanel value="2" sx={{pl:"0"}}><AuthCodeGrant AppDomain={GrantManagement.AuthGrant.AppDomain}/></TabPanel>
                </TabContext>
            </Box>
        </EditBox>
    )
}

export default GrantTypeManagement;