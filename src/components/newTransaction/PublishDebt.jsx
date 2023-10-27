import React, { useEffect, useState } from 'react'
import Axios from '../../axios/Axios'

export default function PublishDebt(props) {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState(null);

  useEffect(() => {
    console.log(props.booking)
    const sum = props.total + props.amount
    parseInt(sum)
    setObj({ 'userID': props.userId, 'amount': props.amount,'booking': props.booking, 'duedate': props.dueDate, 'total': sum, 'paid': false })
  },[])

  return (
    <>
      {count === 0 && obj ? <Axios call={'post'} type={'appointments'} object={obj} setCount={setCount} count={count}/> : null}
      {count === 1 && obj ? <Axios call={'put'} type={'users'} object={{ 'total': obj.total}} setCount={setCount} count={count} id={props.userId}/> : null}
    </>
  )
}
