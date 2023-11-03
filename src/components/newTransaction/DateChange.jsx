import React, { useState } from 'react'
import { Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

export default function DateChange(props) {
    const [isDate, setIsDate] = useState(true)
    const [selectedDate, setSelectedDate] = useState({})

    const handleDateChange = (date) => {
        if (isDate) {
            setIsDate(false),
            setSelectedDate({
                ...selectedDate,
                year: date.$y,
                month: date.$M,
                day: date.$D
            })
        }
        else if (!isDate) {
            setIsDate(true),
            setSelectedDate({
                ...selectedDate,
                hour: date.$H,
                minute: date.$m
            })
            selectedDate.hour= date.$H,
            selectedDate.minute= date.$m
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
                {isDate?<DatePicker required label={"Set Booking"} onAccept={handleDateChange} renderInput={(params) => <input {...params} />} format='YYYY-MM-DD' />
            :   <DemoItem>
                    <MobileTimePicker onAccept={handleDateChange}/>
                </DemoItem>}
            </LocalizationProvider>

        </div>
    )
}
