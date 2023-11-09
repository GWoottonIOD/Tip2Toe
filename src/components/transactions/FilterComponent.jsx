import * as React from 'react';
import {
  Button, CssBaseline, Box, Typography,
  Container
} from '@mui/material';
import { useEffect, useState } from 'react';
import DebtPages from '../DebtPages';
import HomeMapComponent from './HomeMapComponent';
import RefreshIcon from '@mui/icons-material/Refresh';

const currentDay = new Date().toISOString()
const updateDay = new Date(currentDay);
updateDay.setHours(updateDay.getHours() + 13);

export default function FilterComponent(props) {
  const [filter, setFilter] = useState([])
  const [isPaid, setIsPaid] = useState(false)
  const [isToday, setToday] = useState(true)
  const [total, setTotal] = useState(0)
  const [day, setDay] = useState(updateDay.toISOString().slice(0,10))
  const [page, setPage] = useState(1);

  console.log('Day: '+updateDay.toISOString().slice(0,10))

  const debts = props.debts
  const currentUser = props.currentUser

  console.log(isToday)
  console.log(isPaid)
  const filterPaid = () => {
    const filteredArray = debts.filter((transaction) => transaction.paid === true)
    setFilter(filteredArray)
    getTotal(filteredArray)
    setIsPaid(true)
  }

  const filterToday = (response, today) => {
    let filteredTransaction = debts
    {isToday? setToday(today) : setToday(today)}
    {isToday?filteredTransaction = response.filter((transaction)=> transaction.booking.slice(0,10) === day): null}
    filterUnpaid(filteredTransaction)
  }

  const filterUnpaid = (response) => {
    let filteredTransaction = response.filter((transaction) => transaction.paid === false)
    setFilter(filteredTransaction)
    getTotal(response)
    setIsPaid(false)
  } 
 
  const getTotal = (transactions) => {
    const filteredArray = transactions.filter((transaction) => transaction.paid === false)
    const amountArray = filteredArray.map(({ amount }) => ({ amount }))
    const sum = amountArray.reduce((acc, curr) => acc + curr.amount, 0);
    setTotal(sum)
  }

  useEffect(() => {
    filterUnpaid(debts)
  }, [debts])

  return (
    <>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Typography
            component="h1"
            variant="h6"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {currentUser.UserAdmin ?<div>Bookings </div>:<div>Bookings for {currentUser.name}<br/></div>}
            {isPaid ? null : <div>Amount owed: ${total}</div>}
            {currentUser && currentUser.UserAdmin ? <Button variant="outlined" id="buttonWhite" size="small" href={"/debtnew/"}>Add a booking</Button> : <Button variant="outlined" id="buttonWhite" size="small" href={"/debtnew/"}>Book now!</Button>}
            <br/>{currentUser && currentUser.UserAdmin && isPaid ? <Button variant="outlined" id="buttonWhite" size="small" onClick={() => filterUnpaid(debts)}>Unpaid</Button> : <Button variant="outlined" id="buttonWhite" size="small" onClick={filterPaid}>Paid</Button>}
            {/* <br/>{isToday ? <Button variant="outlined" id="buttonWhite" size="small" onClick={() => setToday(false)}>All Transactions</Button> : <Button variant="outlined" id="buttonWhite" size="small" onClick={() => setToday(true)}>Today only</Button>} */}
            <br/>{isToday ? <Button variant="outlined" id="buttonWhite" size="small" onClick={() => filterToday(debts, false)}>Today Only</Button> : <Button variant="outlined" id="buttonWhite" size="small" onClick={() => filterToday(debts, true)}>All appointments</Button>}
            <div><Button variant="outlined" id="buttonWhite" size="small"><RefreshIcon onClick={() => window.location.reload()} /></Button></div>
          </Typography>
          <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer"></Box>
          <HomeMapComponent debts={filter} currentUser={currentUser} paid={isPaid} />
        </Container>
      </main>
        <Typography variant="h6" align="center" gutterBottom>
          <DebtPages pageHandler={setPage} list={filter.length} />
        </Typography>
    </>
  )
}
