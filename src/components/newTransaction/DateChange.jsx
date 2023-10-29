import React, { useState } from 'react'
import { Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

export default function DateChange(props) {
    const [isDate, setIsDate] = useState(true)

    const handleDateChange = (date) => {
        if (date.$d){setIsDate(false)}
        else if (date.$H) {setIsDate(true)}
        //define the date
        // const selectedDate = new Date(date)
        const selectedDate = {
            year: date.$y,
            month: date.$M,
            day: date.$D,
            hour: date.$H,
            minute: date.$m
        }
        console.log('Booking date:',selectedDate)
        //set the date
        props.setBooking(selectedDate);
        newDueDate.setDate(newDueDate.getDate() + 7)
        console.log('dueDate date:',newDueDate)
        props.setDueDate(newDueDate);
    };
    const newDueDate = new Date()

    return (
        <div>
            <br />
            {isDate?<><Button onClick={() => setIsDate(false)}>Change Time</Button><br/></>: <Button onClick={() => setIsDate(true)}>Change Date</Button>}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {isDate?<DatePicker required label={"Due date"} onChange={handleDateChange} renderInput={(params) => <input {...params} />} format='YYYY-MM-DD' />
            :   <DemoItem>
                    <MobileTimePicker defaultValue={newDueDate.toLocaleTimeString()} onChange={handleDateChange}/>
                </DemoItem>}
            </LocalizationProvider>

        </div>
    )
}
