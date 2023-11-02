import * as React from 'react';
import {
  Button, CssBaseline, Box, Typography,
  Container
} from '@mui/material';
import { useEffect, useState } from 'react';
import DebtPages from '../DebtPages';
import HomeMapComponent from './HomeMapComponent';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function FilterComponent(props) {
  const [filter, setFilter] = useState([])
  const [isPaid, setIsPaid] = useState(false)
  const [total, setTotal] = useState(0)
  const [day, setDay] = useState(new Date().toISOString())
  const updateDay = new Date(day);
  updateDay.setHours(updateDay.getHours() + 36);
  const [page, setPage] = useState(1);
  // console.log(day.toLocaleDateString().replace('/', '-').replace('/', '-').replace(day.slice(0,2), day.slice(8,10)))
  const getDay = day.replace(day.slice(0,2), day.slice(8,10))
  // console.log(`${getDay}`)
  // console.log('Day: '+updateDay.toISOString())
  console.log('Day: '+day)
  // console.log(debts)

  const debts = props.debts
  const currentUser = props.currentUser
  console.log(debts)
  const filterPaid = () => {
    const filteredArray = debts.filter((transaction) => transaction.paid === true)
    setFilter(filteredArray)
    getTotal(filteredArray)
    setIsPaid(true)
  }

  const filterUnpaid = (response) => {
    const filteredTransaction = response.filter((transaction) => transaction.paid === false)
    const todayOnly = filteredTransaction.filter((transaction)=> transaction.booking.slice(0,10) === day)
    const consoleMap = response.map((trans)=> console.log(trans.booking.slice(0,10)))
    setFilter(todayOnly)
    // setFilter(filteredTransaction)
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
