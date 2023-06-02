import {useParams} from "react-router-dom";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer, DemoItem} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import {Box, FormControl} from "@mui/material";
import * as React from "react";
import {addYears} from "date-fns";
import {useState} from "react";

function BookPage() {
    const {serviceId} = useParams();
    const [date, setDate] = useState(null);
    const [time, setTime] = React.useState(dayjs('2022-04-17T15:30'));
    const maxDate = String(addYears(new Date(), 1));

    return (
        <div className="clinic-page">
            <Box sx={{marginTop: 10, width: '100%', display:'flex',justifyContent:'center'}}>
                <FormControl sx={{width: '80%'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DemoItem >
                                <DatePicker
                                    format="DD/MM/YYYY"
                                    label="Choose the date"
                                    value={date}
                                    sx={{width: '100%'}}
                                    onChange={(newValue) => setDate(newValue)}
                                    disablePast
                                    maxDate={dayjs(maxDate)}
                                    views={['day']}
                                />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                </FormControl>
            </Box>
        </div>
    );
}

export default BookPage;