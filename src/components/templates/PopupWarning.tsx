import { Box, Button, Dialog, DialogActions, DialogTitle, Typography } from "@mui/material"

interface PopupProps {
    open: {open:boolean,clickedYes:boolean}
    setOpen: React.Dispatch<React.SetStateAction<{
        open: boolean;
        clickedYes: boolean;
    }>>,
    message: string,
}

const PopupWarning =({open,setOpen,message}:PopupProps)=>{

    const ClickYes =()=>{
        setOpen({open:false,clickedYes:true});
    } 

    const ClickNo =()=>{
        setOpen({open:false,clickedYes:false});
    }

    return(
        <Dialog
            open={open.open}
            onClose={ClickNo}
        >
            <DialogTitle>
                <Typography variant="h5" sx={{fontFamily:"'Mukta', sans-serif"}}>{message}</Typography>
            </DialogTitle>
            <DialogActions
                sx={{
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "center"
                }}>
                <Box sx={{ mb: "30px", display: "flex", flexDirection: "row", justifyContent: "space-around",  }}>
                    <Button variant="contained" sx={{ mr: "20px", width: "100px"}} onClick={ClickYes}>Yes</Button>
                    <Button variant="contained" sx={{ ml: "20px", width: "100px"}} onClick={ClickNo}>No</Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}

export default PopupWarning