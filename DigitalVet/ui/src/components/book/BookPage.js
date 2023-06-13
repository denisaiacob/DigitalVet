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
import {useEffect} from "react";
import ClinicService from "../../services/ClinicService";

function BookPage({timeSteps, setAppointment, service}) {
    const maxDate = String(addMonths(new Date(), 3));
    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState(dayjs());
    const [program, setProgram] = React.useState(null);
    const [open, setOpen] = React.useState("");
    const [closed, setClosed] = React.useState("");

    useEffect(() => {
        const fetchProgram = async () => {
            try {
                const programResponse = await ClinicService.getProgramByClinicId(service.clinicId);
                setProgram(programResponse.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (service) {
            fetchProgram().then();
        }
    }, [service]);

    const shouldDisableDate = (date) => {
        const inputDate = new Date(date);
        if (program) {
            const dayOfWeek = inputDate.getDay();
            if (program.monday === '-' && dayOfWeek === 1) return true;
            if (program.tuesday === '-' && dayOfWeek === 2) return true;
            if (program.wednesday === '-' && dayOfWeek === 3) return true;
            if (program.thursday === '-' && dayOfWeek === 4) return true;
            if (program.friday === '-' && dayOfWeek === 5) return true;
            if (program.saturday === '-' && dayOfWeek === 6) return true;
            if (program.sunday === '-' && dayOfWeek === 0) return true;
        }
        return false;
    };

    const handleChangeDate = (value) => {
        setDate(value);
        const currentDate = new Date(value.toISOString().split('T')[0]);
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + 1);
        const selectedDate = nextDate.toISOString().split('T')[0];
        setAppointment((prevAppointment) => ({
            ...prevAppointment,
            day: selectedDate,
        }));
        if (program) {
            let dayOfWeek = new Date(selectedDate).getDay();
            let parts = [];
            if (dayOfWeek === 0) parts = program.monday.trim().split("-");
            if (dayOfWeek === 1) parts = program.tuesday.trim().split("-");
            if (dayOfWeek === 2) parts = program.wednesday.trim().split("-");
            if (dayOfWeek === 3) parts = program.thursday.trim().split("-");
            if (dayOfWeek === 4) parts = program.friday.trim().split("-");
            if (dayOfWeek === 5) parts = program.saturday.trim().split("-");
            if (dayOfWeek === 6) parts = program.sunday.trim().split("-");

            if (parts.length > 0) {
                setOpen(parts[0]);
                setClosed(parts[1]);
            }
        }
    };

    const shouldDisableTime = (value: Dayjs, view: TimeView) => {
        const o = dayjs(open, 'HH:mm');
        const c = dayjs(closed, 'HH:mm');
        return value < o || value > c;
    };

    const handleChangeTime = (date) => {
        setTime(date);
        date = new Date(date);

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