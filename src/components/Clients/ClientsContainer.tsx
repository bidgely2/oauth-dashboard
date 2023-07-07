import { Box, Button, Typography } from "@mui/material";
import ClientDetails from "./ClientsComponents/ClientDetails";
import EncryptionDetails from "./ClientsComponents/EncryptionDetails";
import GrantTypeManagement from "./ClientsComponents/GrantTypeManagement";
import KeyManagement from "./ClientsComponents/TokenManagement";
import DeleteCredentials from "./ClientsComponents/DeleteCredentials";
import AppDomains from "./ClientsComponents/AppDomains";
import { useNavigate, useParams } from "react-router-dom";
import CLIENTDATA, { EventsInterface, } from "../../__mock__/apis/OauthMocks/ClientsInfo";

const Clients = () => {

    const routeParams = useParams();
    const id = Number(routeParams.id);

    // for clicking back button
    const navigate = useNavigate();
    const BackClick =()=>{
        navigate("/dashboard")
    }

    const ClientData: EventsInterface = CLIENTDATA[id];

    return (
        <Box sx={{ width: "100%",p: "70px 0px 80px 0px", mt:"20px", bgcolor: "#edede8"}}>
            <Box sx={{display:"flex",flexDirection:"row", alignItems:"center", mb:"20px",ml:"40px"}}>
                <Typography sx={{fontFamily:"'Noto Sans SC', sans-serif", typography:"subtitle3", letterSpacing:"1px"}}> App/Credentials Information</Typography>
                <Button variant="contained" sx={{ml:"auto",mr:"40px"}} onClick={BackClick}>Back</Button>  
            </Box>
            <ClientDetails ClientDetail={ClientData.ClientDetail}/>
            <EncryptionDetails EncryptDetail={ClientData.EncryptDetail}/>
            <AppDomains AppDomain={ClientData.AppDomain}/>
            <GrantTypeManagement GrantManagement={ClientData.GrantManagement}/>
            <KeyManagement KeyManagement={ClientData.KeyManagement}/>
            <DeleteCredentials props={ClientData}/>
        </Box>
    )
}

export default Clients;