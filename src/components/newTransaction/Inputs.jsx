import React, { useState} from 'react'
import {Button, Typography} from '@mui/material'
import DateChange from './DateChange';
import Totalize from './Totalize';
import PublishDebt from './PublishDebt';
import ChangeAmount from './ChangeAmount';

export default function Inputs(props) {
    const [total, setTotal] = useState(null);
    const [dueDate, setDueDate] = useState(null);
    const [amount, setAmount] = useState(null)
    const [booking, setBooking] = useState(null)
    const [count, setCount] = useState(null)

    const inputCheck = () => {
        if (amount == null || dueDate == null || props.user == null || booking == null) {
            alert('Please fill in all fields')
        } else { setCount(count+1)  } 
    }
    
    return (
        <div>
            {/* {props.user?<Totalize setTotal={setTotal} user={props.user}/>:null} */}
            <br/><Typography variant='h6'>Due: ${amount}</Typography><br/>
            <ChangeAmount setAmount={setAmount} serviceList={props.serviceList} amount={props.amount}/>
            <DateChange setDueDate={setDueDate} setBooking={setBooking}/><br/>
            <Button onClick={inputCheck}>Add</Button>
            {count===1 ? <PublishDebt userId={props.userId} amount={amount} booking={booking} dueDate={dueDate} total={total} onChange={()=>setCount(count+1)}/> : null}
        </div>
    )
}