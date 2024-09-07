import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from "@mui/material";

export const AddressCard = ({item,showButton,handleSelectAddress}) => {
    
    return (
        <Card ClassName="flex gap-5 w-64 p-5">
              <HomeIcon/>
              <div className="space-y-3 gap-5 w-64 p-5">
                <h1 className="font-semibold text-lg text-white">Home</h1>
                <p>
                    chilaw, nwejbj,
                    ghhjfgj,sdghfgjs
                </p>
                 {showButton && 
                 (<Button variant="outlined" fullWidth onClick={()=>handleSelectAddress(item)}>select</Button>)}
              </div>
        </Card>
    )
}