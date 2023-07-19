import { Box } from "@mui/material"
import React from "react"

interface BoxProps{
    children: React.ReactNode
}

export const EditBox =({children}:BoxProps) =>{
    return(
        <Box
            sx={{
                width:{xs:"fit-content%",md:"70%"},
                minWidth:"fit-content",
                margin: {xs:"20px 50px",md:"20px auto"},
                p: "24px 40px",
                bgcolor:"white",
                borderRadius:"5px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                boxSizing:"border-box"
            }}>
                {children}
        </Box>
    )
}