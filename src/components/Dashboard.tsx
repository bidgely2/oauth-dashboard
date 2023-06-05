import { Box, Typography } from "@mui/material";

function Dashboard(){
    return (
        <Box 
            sx={{
                position:"absolute",
                width:"100%",
                height:"75%",
                bgcolor:"#f7f7f5",
                top:"10%"}}>
            <Typography>Welcome to the Dashboard</Typography>
        </Box>
    )
}

export default Dashboard;