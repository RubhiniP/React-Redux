import React, { Component } from "react";
import PresentationalComponent from "./PresentationalComponent";

class ContainerComponents2 extends Component{

    clickHandler2 = () => {
        console.log("Button 2 is clicked");
    }

    render(){
        return(
            <div>
                <PresentationalComponent clickHandler={this.clickHandler2} name="Button 2"/>
            </div>
        );
    }
}

export default ContainerComponents2;