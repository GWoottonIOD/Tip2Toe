import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import Axios from '../../axios/Axios';
import Inputs from './Inputs';
import GetServices from './GetServices';

export default function GetUser(props) {
  const [userId, setUserId] = useState(null);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const users = props.users;
  const userOptions = users.map((user) => ({
    label: user.name.toString(), // Convert the ID to a string
    value: user.id, // Keep the ID as a number
  }));

  return (
    <>
    <Autocomplete
        disablePortal
        id="User ID"
        onChange={(e, selectedOption) => {
          setUserId(selectedOption ? selectedOption.value : null);
          setCount(count + 1);
          setUser(users.find(service => service.id === selectedOption.value));
        }}
        options={userOptions}
        getOptionLabel={(option) => option.label}
        sx={{ width: 195, margin: '0 auto', textAlign: 'center' }}
        renderInput={(params) => <TextField {...params} sx={{ textAlign: 'center' }}  label="Choose a client" />}
      /><br/>
  <GetServices user={user}/>
    </>
  );
}
