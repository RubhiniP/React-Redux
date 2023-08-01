import React, { Component } from "react";
import PresentationalComponent from "./PresentationalComponent";

class ContainerComponents extends Component{

    clickHandler = () => {
        console.log("Button clicked")
    }

    render(){
        return(
            <div>
                <PresentationalComponent clickHandler={this.clickHandler} name="Button"/>
            </div>
        );
    }
}

export default ContainerComponents;