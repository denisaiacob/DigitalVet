import React, {useEffect, useState} from "react";
import "../../../App.css"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide";
import {useLocation} from "react-router-dom";
import dayjs from "dayjs";
import {useMediaQuery, useTheme} from "@mui/material";
import LeftResponsiveSide from "./LeftResponsiveSide";
import ClinicService from "../../../services/ClinicService";

function ShowClinics() {
    const theme2 = useTheme();
    const isMatch = useMediaQuery(theme2.breakpoints.down(550));
    const [clinics, setClinics] = useState([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [initialValues, setInitialValues] = useState({
        location: queryParams.get('location') || "",
        service: queryParams.get('service') || "",
        date: queryParams.get('date')!=='M' ? dayjs(queryParams.get('date')) : null,
        sort: null
    });

    useEffect(() => {
        const fetchClinic = async () => {
            try {
                const response = await ClinicService.getAllClinics();
                if(initialValues.location!=="") {
                    const newFilter = response.data.filter((value) => {
                        return value.city === initialValues.location;
                    });
                    setClinics(newFilter);
                }else{
                    setClinics(response.data);
                }
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchClinic().then();
    }, [initialValues]);

    return (
        <div>
            {isMatch ? (
                <div className="responsive-container">
                    <div className="right-column" style={{marginBottom: 40}}>
                        <LeftResponsiveSide initialValues={initialValues} setInitialValues={setInitialValues}/>
                        <RightSide filter={initialValues}/>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="left-column" style={{marginLeft: 40, marginBottom: 90}}>
                        <LeftSide initialValues={initialValues} setInitialValues={setInitialValues}/>
                    </div>
                    <div className="right-column" style={{marginBottom: 20}}>
                        <RightSide clinics={clinics} filter={initialValues}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShowClinics;