import React, { useState, useEffect, useContext } from 'react'
import {TextField, Button} from '@mui/material';
import {DebtContext} from './context/DebtContext'
import {PageTypeContext} from './context/PageTypeContext'
import {UsersContext} from './context/UserContext'
import {SearchContext} from './context/SearchContext'
import SearchIcon from '@mui/icons-material/Search';
import Axios from './axios/Axios';

export default function DebtSearch(props) {
  let [textField, setTextField] = useState('')
  const {setDebts} = useContext(DebtContext);
  const {setUsers} = useContext(UsersContext);
  const {pageType} = useContext(PageTypeContext);
  const {query, setQuery} = useContext(SearchContext);
  
  //if the textfield is empty and button is pushed, reloads the screen. if not, sets the query with input.
  const setTheQuery = () => {
    setQuery(textField)
    if (textField==='') {
      window.location.reload()
    }
  }

  return (
      <div>
        <TextField InputLabelProps={{style: { color: '#FF10F0', borderColor: '#FF10F0'}}}  label="search" variant='filled' type="text" value={textField} onChange={(e)=>setTextField(e.target.value)}/><Button id="searchButton" onClick={()=>setTheQuery()}><SearchIcon sx={{ mr: 2, color: '#FF10F0' }} /></Button>
        {query?<Axios setResponse={setDebts} call={'get'} type={pageType} id={query}/>:null}
      </div>
      
  )
}