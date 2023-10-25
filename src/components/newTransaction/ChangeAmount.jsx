import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@mui/material'

export default function ChangeAmount(props) {
    const [isCustom, setCustom] = useState(false)

    useEffect(() => {
        console.log(props.serviceList)
        const sum = props.serviceList.map(service => service.cost)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sum)
        props.setAmount(sum)
    }, [props.serviceList])
    return (
        <div>
            {isCustom ? (
                <>
                    <TextField
                        type="number"
                        onChange={(e) => props.setAmount(e.target.value)}
                        label="Custom Amount"
                    />
                    <br />
                </>
            ) : (
                null
            )}

            {isCustom?<Button onClick={() => setCustom(!isCustom)}>Buttons</Button>:<Button onClick={() => setCustom(!isCustom)}>Custom Amount</Button>}
        </div>
    )
}
