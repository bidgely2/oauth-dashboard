import { SESSION_ACTIONS } from "../../store/actions/SessionActions";
import {MenuOutlined} from "@mui/icons-material"
import { Button, Menu as MENU, MenuItem, Fade } from "@mui/material";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

const Menu = () =>{

    const dispatch = useDispatch();

    const loggedIn:boolean = useSelector((state:any)=>state.session);

    const [menu, setMenu] = useState<null| HTMLElement>(null);
    const open = Boolean(menu);
    const handleClick = (event:React.MouseEvent<HTMLElement>)=>{
        if(menu===null) {setMenu(event?.currentTarget)}
        else {setMenu(null)}
        
    }
    const handleClose = () =>{
        dispatch(SESSION_ACTIONS.SET_LOGGED_IN(false));
        setMenu(null);
        console.log(loggedIn);
    }

    return (
        <>
            <Button 
                onClick={handleClick}
            >
                <MenuOutlined color="action" sx={{mr:"20px"}}/>
            </Button>
            <MENU
                anchorEl={menu}
                open={open}
                onClick={handleClick}
            >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </MENU>
        </>
    )
}

export default Menu;

