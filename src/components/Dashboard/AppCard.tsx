import { Card, Typography, CardContent, IconButton } from "@mui/material";
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
                width:"170px",
                height:"140px",
                position:"relative",
            }}
        >
            <IconButton sx={{position:"absolute",right:"2px",top:"2px", opacity:"70%"}}>
                <Edit color="primary" fontSize="small" onClick={EditClick}/>
            </IconButton>
            <CardContent sx={{ mt:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography sx={{ typography:"subtitle3", wordWrap:"unset",letterSpacing:"1px"}}>
                    {props.data.name}
                </Typography>
                <Typography sx={{typography:"body3"}}>{props.data.type}</Typography>
            </CardContent>
            
        </Card>
    );
};

export default AppCard;
