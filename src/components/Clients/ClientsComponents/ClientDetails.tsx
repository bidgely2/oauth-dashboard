import { Box, IconButton } from "@mui/material";
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
                        <IconButton sx={{ml:"5px",mt:"28px"}}>
                            {(clientSecret==="******")
                                ?<Eye 
                                    fontSize="small" 
                                    color="primary" 
                                    onClick={ClickHide}/>
                                :<ClosedEye 
                                    fontSize="small" 
                                    color="primary" 
                                    onClick={ClickHide}/> 
                            }      
                        </IconButton>
                    </Box>
                <InputBox title="Api Endpoint" placeholder={ClientDetail.APIEndpoint} />
            </Box>
        </EditBox>
    )
}

export default ClientDetails;