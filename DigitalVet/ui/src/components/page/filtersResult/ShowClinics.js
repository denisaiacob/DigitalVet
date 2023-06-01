import React, {useEffect, useState} from "react";
import "../../../App.css"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide";
import {useLocation} from "react-router-dom";
import {Typography} from "@mui/material";
import dayjs from "dayjs";

function ShowClinics() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [initialValues, setInitialValues] = useState({
        location: "",
        service: "",
        date: null,
        sort: null
    });
    useEffect(() => {
        const locationValue = queryParams.get('location');
        const serviceValue = queryParams.get('service');
        const dateValue = queryParams.get('date');

        setInitialValues({
            location: locationValue || "",
            service: serviceValue || "",
            date: dateValue ? dayjs(dateValue) : null,
            sort:'rating'
        });
    }, []);

    return (
        <div className="container">
            <div className="left-column" style={{marginLeft: 40, marginBottom: 90}}>
                <LeftSide initialValues={initialValues} setInitialValues={setInitialValues}/>
            </div>
            <div className="right-column" style={{marginLeft: 60, marginRight: 20, marginBottom: 20}}>
                <RightSide/>
            </div>
        </div>
    );
}

export default ShowClinics;