import { Box, Button, Dialog, DialogActions, DialogTitle, Typography } from "@mui/material"

interface PopupProps {
    open: number,
    setOpen: React.Dispatch<React.SetStateAction<number>>,
    message: string,
}

const PopupWarning =(props:PopupProps)=>{

    const ClickYes =()=>{
        props.setOpen(2);
    } 

    const ClickNo =()=>{
        props.setOpen(0);
    }

    return(
        <Dialog
            open={props.open===1}
            onClose={()=>{props.setOpen(0)}}
        >
            <DialogTitle>
                <Typography variant="h6">{props.message}</Typography>
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