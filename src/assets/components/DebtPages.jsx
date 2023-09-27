import React from 'react'
import Button from '@mui/material/Button';

export default function DebtPages(props) {
    let pages = [];
    //sets debts.length amount pages
    for (let i = 0; i<props.list/6; i++) {
        pages.push(<Button id="buttonWhite" variant="outlined" key={i} onClick={()=>props.pageHandler(i+1)} >{i+1}</Button>)
    } return pages
    }
