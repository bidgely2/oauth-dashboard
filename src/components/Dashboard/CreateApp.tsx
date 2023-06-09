import {Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Box, Button, Snackbar, AlertProps } from "@mui/material";
import {Apps, Appdata} from "../../__mock__/apis/AppInfo"
import { useState } from "react";
import React from "react";
import MuiAlert, { AlertColor } from "@mui/material/Alert"

interface PopupProps{
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface ToastMsg{
    open: boolean,
    message: AlertColor,
    content: String
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function CreateApp(props:PopupProps){

    
    const [input, setInput] = useState<Appdata>({name:"",type:""});   //FormInputs
    const [Toast,setToast] = useState<ToastMsg>({open:false,message:"success",content:""});  //ToastMsg

    function ClickCreate(){
        let present:Appdata|undefined = Apps.find((data)=>{return data.name===input.name?true:false})

        if(present===undefined){
            Apps.push(input);
            setToast({open:true,message:"success",content:"Success"})
        } else{
            setToast({open:true,message:"warning",content:"App already exists"})
        }
    }

    function handleInput(e: any){
        const NAME = e.target.name;
        const VALUE = e.target.value
        setInput({...input, [NAME]: VALUE})
    }

    function ClickCancel(){
        setInput({name:"",type:""})
        props.setOpen(false);
    }

    function ToastClose(){
        setToast({...Toast,open:false})
    }

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
                    height:"380px"
                }}>
                <DialogTitle sx={{mr:"auto"}}>
                    <Typography variant="h4" sx={{fontWeight:"550"}} >Create App</Typography>
                    <Typography variant="subtitle2" sx={{mt:"10px", mb:"0px", ml:"5px"}}>Provide some description about the app</Typography>
                </DialogTitle>
                <DialogContent sx={{
                            padding:"0px",
                            display:"flex",  
                            flexDirection:"column",
                            alignItems:"center"}}>     
                    <Box sx={{
                        display:"grid",
                        gridTemplateColumns:"auto auto",
                        columnGap:"20px",
                        rowGap:"20px",
                        padding:'10px',
                        alignItems:"center",
                    }}>
                        <Typography variant="h6" >App Name</Typography>
                        <TextField variant="outlined" label="App Form" name="name" onChange={handleInput}/>
                        <Typography variant="h6" >App Type</Typography>
                        <TextField variant="outlined" label="App Type" name="type" onChange={handleInput}/>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Box sx={{mb:"40px", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                        <Button variant="contained" sx={{  mr:"20px", width:"100px"}} onClick={ClickCreate}>Create</Button>
                        <Button variant="contained" sx={{  ml:"20px", width:"100px"}} onClick={ClickCancel}>Cancel</Button>
                    </Box>
                </DialogActions>
            </Box>
            <Snackbar open={Toast.open} autoHideDuration={6000} onClose={ToastClose}>
                <Alert severity={Toast.message} sx={{ width: '100%' }}>
                    {Toast.content}
                </Alert>
            </Snackbar>
        </Dialog>
    )
}

export default CreateApp;