import { Box } from "@mui/material";
import { InputBox } from "../../templates/InputBox";
import { EditBox } from "../../templates/EditBox";
import {Visibility as Eye, VisibilityOff as ClosedEye} from '@mui/icons-material';
import { useState } from "react";
import {Title} from "./title/title"

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
            <Title>Client Detail</Title>
            <Box sx={{ display: "grid", gridTemplateColumns:"auto", gap: "17px",mt:"15px"}}>
                    <InputBox title="Client Id" placeholder={ClientDetail.ClientId}/>
                    <Box sx={{display:"flex"}}>
                        <InputBox title="Client Secret" placeholder={clientSecret}/>
                        {(clientSecret==="******")
                            ?<Eye 
                                fontSize="small" 
                                color="primary" 
                                sx={{ml:"10px",mt:"42px", opacity:"60%", ":hover":{opacity:"100%"}, ":active":{fontSize:"19px"}}} 
                                onClick={ClickHide}/>
                            :<ClosedEye 
                                fontSize="small" 
                                color="primary" 
                                sx={{ml:"10px",mt:"42px", ":active":{fontSize:"19px"}}} 
                                onClick={ClickHide}/> 
                        }      
                    </Box>
                <InputBox title="Api Endpoint" placeholder={ClientDetail.APIEndpoint} />
            </Box>
        </EditBox>
    )
}

export default ClientDetails;