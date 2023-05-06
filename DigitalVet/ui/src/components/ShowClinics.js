import React from "react";
import "../App.css"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide";

function ShowClinics() {
    return (
        <div className="container">
            <div className="left-column" style={{marginLeft:40}}>
                <LeftSide/>
            </div>
            <div className="right-column" style={{marginLeft:60,marginRight:20}}>
                <RightSide/>
            </div>
        </div>
    );
}

export default ShowClinics;