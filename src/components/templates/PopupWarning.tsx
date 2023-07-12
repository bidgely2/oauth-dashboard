import { Close } from "@mui/icons-material";
import { Box, Button, Dialog, DialogActions, DialogTitle, IconButton, Typography } from "@mui/material"

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
            <Box sx={{width:"360px",height:"170px",m:"auto"}}>
                <IconButton sx={{position:"absolute",right:"5px",top:"5px"}}>
                    <Close color="action" fontSize="small" onClick={ClickNo}/>
                </IconButton>
                <DialogTitle sx={{m:"15px 10px 20px 20px",p:"0"}}>
                    <Typography sx={{typography:"subtitle1", mb:"5px"}}>Do you want to continue ?</Typography>
                    <Typography sx={{typography:"body4"}}>{message}</Typography>

                </DialogTitle>
                <DialogActions
                    sx={{
                        display: "flex", 
                        flexDirection: "row", 
                        justifyContent: "center",
                        p:"0",
                    }}>
                    <Box sx={{ml:"auto",mr:"20px",display:"flex",gap:"20px"}}>
                        <Button variant="contained"  sx={{ bgcolor:"#0081C9", width: "80px",height:"40px",borderRadius:"2px", ":hover":{bgcolor:"#5A96E3"}}} onClick={ClickNo}>No</Button>
                        <Button variant="contained"  sx={{ bgcolor:"#0081C9", width: "80px",height:"40px",borderRadius:"2px", ":hover":{bgcolor:"#5A96E3"}}} onClick={ClickYes}>Yes</Button>
                    </Box>
                </DialogActions>
            </Box>
        </Dialog>
    )
}

export default PopupWarning