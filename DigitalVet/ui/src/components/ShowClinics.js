import React from "react";
import "../App.css"
import LeftSide from "./LeftSide"

function ShowClinics() {
    return (
        <div className="container">
            <div className="left-column">
                <LeftSide/>
            </div>
            <div className="right-column">Coloana dreapta</div>
        </div>
    );
}

export default ShowClinics;