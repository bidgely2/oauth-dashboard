import { Toolbar, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Box, Button } from "@mui/material";

interface PopupProps{
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function CreateApp(props:PopupProps){
    return(
        <Dialog 
            open={props.open}
            onClose={()=>props.setOpen(!props.open)}>
            <Box 
                sx={{
                    display:"flex", 
                    flexDirection:"column", 
                    alignItems:"center",
                    bgcolor:"white",
                    width:"400px",
                    height:"400px"
                }}>
                <DialogTitle sx={{display:"flex",        // Title
                            flexDirection:"row",
                            justifyContent:"center"}}>
                    <Toolbar
                        sx={{
                            width:"300px",
                            bgcolor:"#19A7CE",
                            color:"white",
                            borderRadius:"5px",
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"center"
                        }}>
                        <Typography variant="h5">Create App</Typography>
                    </Toolbar>
                </DialogTitle>
                <DialogContent sx={{padding:"0px"}}>     {/*Content*/}
                    <Box sx={{
                        display:"grid",
                        gridTemplateColumns:"auto auto",
                        columnGap:"20px",
                        rowGap:"20px",
                        padding:'10px',
                        alignItems:"center",
                        mt:"20px"
                    }}>
                        <Typography variant="h6">App Name</Typography>
                        <TextField variant="outlined" label="App Form" />
                        <Typography variant="h6">App Type</Typography>
                        <TextField variant="outlined" label="App Type" />
                    </Box>
                </DialogContent>
                <DialogActions>                         {/*Buttons*/}
                    <Box sx={{mb:"40px", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                        <Button variant="contained" sx={{bgcolor:"#537FE7", mr:"20px", width:"100px"}}>Create</Button>
                        <Button variant="contained" sx={{bgcolor:"#537FE7", ml:"20px", width:"100px"}}>Cancel</Button>
                    </Box>
                </DialogActions>
            </Box>
        </Dialog>
    )
}

export default CreateApp;