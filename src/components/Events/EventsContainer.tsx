import { Box, Button, Typography } from "@mui/material";
import ClientDetails from "./EventsComponents/ClientDetails";
import EncryptionDetails from "./EventsComponents/EncryptionDetails";
import GrantTypeManagement from "./EventsComponents/GrantTypeManagement";
import KeyManagement from "./EventsComponents/KeyManagement";
import DeleteCredentials from "./EventsComponents/DeleteCredentials";
import AppDomains from "./EventsComponents/AppDomains";
import { useNavigate } from "react-router-dom";
import { Oauthcredentials as props } from "../../__mock__/apis/EventsInfo";


const Events = () => {

    const navigate = useNavigate();

    const BackClick =()=>{
        navigate("/dashboard")
    }

    return (
        <Box sx={{ width: "100vw",p: "60px 20px 90px 20px", m:"20px 0"}}>
            <Box sx={{display:"flex",flexDirection:"row", alignItems:"center", mb:"20px",ml:"20px"}}>
                <Typography variant="h5" sx={{fontFamily:"'Noto Sans SC', sans-serif"}}> App/Credentials Information</Typography>
                <Button variant="contained" sx={{ml:"auto",mr:"30px"}} onClick={BackClick}>Back</Button>  
            </Box>
            <ClientDetails ClientDetail={props.ClientDetail}/>
            <EncryptionDetails EncryptDetail={props.EncryptDetail}/>
            <AppDomains AppDomain={props.AppDomain}/>
            <GrantTypeManagement GrantManagement={props.GrantManagement}/>
            <KeyManagement KeyManagement={props.KeyManagement}/>
            <DeleteCredentials props={props}/>
        </Box>
    )
}

export default Events;