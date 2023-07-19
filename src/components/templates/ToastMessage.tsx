import MuiAlert, { AlertColor } from "@mui/material/Alert"
import {Snackbar, AlertProps} from "@mui/material"
import React from "react";

interface ToastProps{
    open: boolean,
    msgType: AlertColor,
    content: String,
    time: number,
    ToastClose: any,
    vertical: any,
    horizontal: any,
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const ToastMessage =(props: ToastProps) =>{

    return (
        <Snackbar open={props.open} autoHideDuration={props.time} onClose={props.ToastClose} anchorOrigin={{ vertical: props.vertical, horizontal: props.horizontal }}>
            <Alert severity={props.msgType} sx={{ width: '100%' }}>
                {props.content}
            </Alert>
        </Snackbar>
    )
}

export default ToastMessage;