import { Box } from "@mui/material"
import React from "react"

interface BoxProps{
    children: React.ReactNode
}

export const EditBox =({children}:BoxProps) =>{
    return(
        <Box
            sx={{
                width: "100vw",
                margin: "20px 0",
                p: "15px 0",
                bgcolor:"white",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            }}>
                {children}
        </Box>
    )
}