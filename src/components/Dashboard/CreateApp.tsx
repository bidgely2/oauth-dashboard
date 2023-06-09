import { AppBar, Box, Button, TextField, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

function CreateApp(){
    const loggedIn = true;
    return(
        <>
        {loggedIn?
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <AppBar sx={{
                bgcolor:"#068DA9",
                width:"80%",
                height:"60px",
                left:"10%",
                top:"10px",
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:"5px"
            }}>
                <Typography variant="h5">Create App</Typography>
            </AppBar>
            <Box sx={{
                position:"absolute",
                top:"80px",
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
            <Typography variant="body2" color="#5c5c5a" sx={{mb:"10px"}}>Provide some description about the app</Typography>
                <Box sx={{
                    display:"grid",
                    gridTemplateColumns:"auto auto",
                    columnGap:"20px",
                    rowGap:"20px",
                    justifyContent:"space-evenly",
                    alignItems:"center"
                }}>
                    <Typography variant="h6">App Name</Typography>
                    <TextField variant="outlined" label="App Form" />
                    <Typography variant="h6">App Type</Typography>
                    <TextField variant="outlined" label="App Type" />
                </Box>
                <Box sx={{mt:"20px", width:"80%", display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                    <Button variant="contained" sx={{bgcolor:"#537FE7"}}>Create</Button>
                    <Button variant="contained" sx={{bgcolor:"#537FE7"}}>Cancel</Button>
                </Box>
            </Box>
        </Box>
        :<Navigate to="/login" replace={true} />}
        </>
    )
}

export default CreateApp;