import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import Axios from '../../axios/Axios';
import Inputs from './Inputs';

export default function Getservice(props) {
  const [serviceId, setServiceId] = useState(null);
  const [count, setCount] = useState(0);
  const [service, setService] = useState(null);
  const services = props.services;
  const serviceOptions = services.map((service) => ({
    label: service.name.toString(), // Convert the ID to a string
    value: service.id, // Keep the ID as a number
  }));

  return (
    <>
    <Autocomplete
        disablePortal
        id="service ID"
        onChange={(e, selectedOption) => {
          setServiceId(selectedOption ? selectedOption.value : null);
          setCount(count + 1);
        }}
        options={serviceOptions}
        getOptionLabel={(option) => option.label}
        sx={{ width: 195, margin: '0 auto', textAlign: 'center' }}
        renderInput={(params) => <TextField {...params} sx={{ textAlign: 'center' }}  label="Add a service" />}
      /><br/>
      {serviceId && count===1 ? (
        <Axios setResponse={setService} call={'get'} type={'services'} id={serviceId} />
      ) : null}
      <Inputs service={service} serviceId={serviceId}/>
    </>
  );
}
