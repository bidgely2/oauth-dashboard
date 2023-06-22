import { Card, Typography, CardContent } from "@mui/material";
import { Appdata } from "../../__mock__/apis/AppInfo";
// import {EditOutlined as Edit} from '@mui/icons-material';
// import {EditNote as Edit} from "@mui/icons-material";
// import {MoreVert as Edit} from '@mui/icons-material';
// import {AppRegistrationTwoTone as Edit} from '@mui/icons-material';
// import {DriveFileRenameOutlineTwoTone as Edit} from '@mui/icons-material';
// import {EditTwoTone as Edit} from '@mui/icons-material';
import {LaunchTwoTone as Edit} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

interface AppCardProps {
    data: Appdata;
}

const AppCard = (props: AppCardProps) => {
    
    const navigate = useNavigate();

    const EditClick =()=>{
        navigate("/editApp/1");
    }

    return (
        <Card
            sx={{
                margin: "10px 10px 10px 20px",
                minWidth:"110px",
                height:"110px",
                position:"relative",
            }}
        >
            <Edit 
                color="primary" 
                fontSize="small" 
                sx={{ 
                    opacity:"50%",
                    position:"absolute",
                    right:"5px", 
                    top:"4px", 
                    ":hover":{opacity:"100%"}, 
                    ":active":{fontSize:"18px"}
                }} 
                onClick={EditClick}/>
            <CardContent sx={{mr:"10px"}}>
                <Typography sx={{ fontWeight: "600", m:"0 auto 0 auto"}} variant="h6">
                    {props.data.name}
                </Typography>
                <Typography variant="body1">{props.data.type}</Typography>
            </CardContent>
            
        </Card>
    );
};

export default AppCard;
