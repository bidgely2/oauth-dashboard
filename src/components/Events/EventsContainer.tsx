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
        <Box sx={{ width: "100vw",p: "70px 20px 80px 20px", m:"20px 0", bgcolor:"#f7f7f5"}}>
            <Box sx={{display:"flex",flexDirection:"row", alignItems:"center", mb:"20px",ml:"20px"}}>
                <Typography variant="h5" sx={{fontFamily:"'Noto Sans SC', sans-serif", color:"#4F4557"}}> App/Credentials Information</Typography>
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