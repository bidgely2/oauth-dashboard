import { Box, Typography } from "@mui/material";
import { InputBox } from "../../templates/InputBox";
import { EditBox } from "../../templates/EditBox";
import {Visibility as Eye, VisibilityOff as ClosedEye} from '@mui/icons-material';
import { useState } from "react";
import styles from "./Client.module.css"

interface ClientDetailProps{
    ClientDetail:any
}

const ClientDetails = ({ClientDetail}:ClientDetailProps) => {

    const [clientSecret,setClientSecret] = useState("******");

    const ClickHide=()=>{
        setClientSecret((clientSecret==="******")? ClientDetail.ClientSecret:("******"));
    }

    return (
        <EditBox>
            <Typography className={styles.title}>Client Detail</Typography>
            <Box sx={{ display: "grid", gridTemplateColumns:"auto", gap: "10px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", margin: "0 0 10px 100px" }}>
                    <InputBox title="ClientId" wide="500px" placeholder={ClientDetail.ClientId}/>
                    <Box sx={{position:"relative"}}>
                        <InputBox title="ClientSecret" wide="500px" placeholder={clientSecret}/>
                        {(clientSecret==="******")
                            ?<Eye 
                                fontSize="small" 
                                color="primary" 
                                sx={{position:"absolute",left:"470px",top:"16px",opacity:"60%", ":hover":{opacity:"100%"}, ":active":{fontSize:"19px"}}} 
                                onClick={ClickHide}/>
                            :<ClosedEye 
                                fontSize="small" 
                                color="primary" 
                                sx={{position:"absolute",left:"470px",top:"16px",":active":{fontSize:"19px"}}} 
                                onClick={ClickHide}/> 
                        }      
                    </Box>
                </Box>
                <InputBox title="Api Endpoint" margin = "0 0 0 100px" wide="500px" placeholder={ClientDetail.APIEndpoint} />
            </Box>
        </EditBox>
    )
}

export default ClientDetails;