import React from "react";
import { Button } from "@mui/material";

function PresentationalComponent(props){
    return(
        <div>
            <Button variant="outlined" sx={{marginTop: '10px', marginBottom: '10px'}} onClick={props.clickHandler}>{props.name}</Button>
        </div>
    );
}

export default PresentationalComponent;