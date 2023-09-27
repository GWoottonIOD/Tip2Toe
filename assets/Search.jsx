import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import {TextField, Button} from '@mui/material';
import {DebtContext} from './context/DebtContext'
import {PageTypeContext} from './context/PageTypeContext'
import {UsersContext} from './context/UserContext'
import {SearchContext} from './context/SearchContext'
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
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
        <TextField InputLabelProps={{style: { color: '#4A8E51', borderColor: '#4A8E51'}}}  label="search" variant='filled' type="text" value={textField} onChange={(e)=>setTextField(e.target.value)}/><Button id="searchButton" onClick={()=>setTheQuery()}>{textField?<SearchIcon sx={{ mr: 2 }} />:<RefreshIcon sx={{ mr: 2 }} />}</Button>
        {query?<Axios setResponse={setDebts} call={'get'} type={pageType} id={query}/>:null}
      </div>
      
  )
}