import * as React from 'react';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer, DemoItem} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs, {Dayjs} from "dayjs";
import {Badge, Box, FormControl, Stack, TextField} from "@mui/material";
import {addMonths, isSameDay} from "date-fns";
import {MultiSectionDigitalClock} from '@mui/x-date-pickers/MultiSectionDigitalClock';
import {PickersDay, TimeView} from "@mui/x-date-pickers";

function BookPage({timeSteps}) {
    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState(dayjs());
    const maxDate = String(addMonths(new Date(), 3));

    // const shouldDisableDate = (date) => {
    //     // Define your disabled dates
    //     const disabledDates = [
    //         new Date('2023-06-15'),
    //         new Date('2023-06-16'),
    //     ];
    //
    //     // Check if the given date is included in the disabled dates
    //     return disabledDates.some((disabledDate) => {
    //         return date.getDate() === disabledDate.getDate()
    //             && date.getMonth() === disabledDate.getMonth()
    //             && date.getFullYear() === disabledDate.getFullYear();
    //     });
    // };

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
                                        onChange={(newValue) => setDate(newValue)}
                                        disablePast
                                        maxDate={dayjs(maxDate)}
                                        views={['day']}
                                        // shouldDisableDate={(newValue) => shouldDisableDate(newValue)}
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
                                        onChange={(newValue) => setTime(newValue)}
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