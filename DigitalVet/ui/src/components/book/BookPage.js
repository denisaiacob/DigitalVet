import * as React from 'react';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer, DemoItem} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs, {Dayjs} from "dayjs";
import {Box, FormControl, Stack} from "@mui/material";
import {addMonths} from "date-fns";
import {MultiSectionDigitalClock} from '@mui/x-date-pickers/MultiSectionDigitalClock';
import {TimeView} from "@mui/x-date-pickers";

function BookPage({timeSteps, setAppointment}) {
    const maxDate = String(addMonths(new Date(), 3));
    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState(dayjs());

    const shouldDisableDate = (date) => {
        const disabledDates = [
            new Date('2023-07-15'),
            new Date('2023-07-16'),
        ];
        const inputDate = new Date(date);
        return disabledDates.some((disabledDate) => {
            return inputDate.getDate() === disabledDate.getDate()
                && inputDate.getMonth() === disabledDate.getMonth()
                && inputDate.getFullYear() === disabledDate.getFullYear();
        });
    };

    const handleChangeDate = (value) => {
        setDate(value);
        const selectedDate = value.toISOString().split('T')[0];
        setAppointment((prevAppointment) => ({
            ...prevAppointment,
            day: selectedDate,
        }));
    };

    const handleChangeTime = (date) => {
        setTime(date);
        date=new Date(date);

        const currentDate = new Date();
        currentDate.setHours(date.getHours());
        currentDate.setMinutes(date.getMinutes());
        currentDate.setSeconds(0);
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        setAppointment((prevAppointment) => ({
            ...prevAppointment,
            time: formattedTime
        }));
    };


    const shouldDisableTime = (value: Dayjs, view: TimeView) => {
        const hour = value.hour();
        if (view === 'hours') {
            return hour < 9 || hour > 13;
        }
        if (view === 'minutes') {
            const minute = value.minute();
            return minute > 20 && hour === 13;
        }
        return false;
    };

    return (
        <div>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Stack sx={{width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <FormControl sx={{width: '80%'}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DemoItem>
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        label="Choose the date"
                                        value={date}
                                        sx={{width: '100%'}}
                                        onChange={(newValue) => handleChangeDate(newValue)}
                                        disablePast
                                        maxDate={dayjs(maxDate)}
                                        views={['day']}
                                        shouldDisableDate={(newValue) => shouldDisableDate(newValue)}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl sx={{width: '80%'}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['MultiSectionDigitalClock']}>
                                <DemoItem label="Choose the time">
                                    <MultiSectionDigitalClock
                                        value={time}
                                        onChange={(newValue) => handleChangeTime(newValue)}
                                        timeSteps={{minutes: timeSteps}}
                                        skipDisabled
                                        shouldDisableTime={shouldDisableTime}
                                        ampm={false}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </FormControl>
                </Stack>
            </Box>
        </div>
    );
}

export default BookPage;