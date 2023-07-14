import { Card, Typography, IconButton, Box } from "@mui/material";
import { AppsInterface } from "../../__mock__/apis/OauthMocks/AppInfo";
import {LaunchTwoTone as Edit} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

interface AppCardProps {
    data: AppsInterface;
    id: number
}

const AppCard = (props: AppCardProps) => {
    
    const navigate = useNavigate();

    const EditClick =()=>{
        navigate("/editApp/"+`${props.id}`);
    }

    return (
        <Card
            sx={{
                margin: "10px",
                width:{xs:"130px",md:"170px"},
                height:{xs:"100px",md:"140px"},
                position:"relative",
            }}
        >
            <IconButton sx={{position:"absolute",right:{xs:"0",md:"2px"},top:{xs:"0",md:"2px"}, opacity:"70%"}}>
                <Edit color="primary" fontSize="small" onClick={EditClick}/>
            </IconButton>
            <Box sx={{height:"100%",p:"0 10px", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Typography sx={{ typography:"subtitle3",letterSpacing:"1px",textAlign:"center"}}>
                    {props.data.name}
                </Typography>
                <Typography sx={{typography:"body3"}}>{props.data.type}</Typography>
            </Box>
            
        </Card>
    );
};

export default AppCard;
