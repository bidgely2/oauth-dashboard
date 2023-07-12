import { SESSION_ACTIONS } from "../../store/actions/SessionActions";
import {MenuOutlined} from "@mui/icons-material"
import { Button, Menu as MENU, MenuItem, Fade } from "@mui/material";
import {useEffect, useState} from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


interface Menuprops{
    loggedIn: boolean,
}

const Menu = (props: Menuprops) =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [menu, setMenu] = useState<null| HTMLElement>(null);
    const open = Boolean(menu);
    const handleClick = (event:React.MouseEvent<HTMLElement>)=>{
        if(menu===null) {setMenu(event?.currentTarget)}
        else {setMenu(null)}
        
    }
    const handleClose = () =>{
        dispatch(SESSION_ACTIONS.SET_LOGGED_IN(false));
        setMenu(null);
        navigate("/login");
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

