import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Button } from '@mui/material';
import Axios from '../../axios/Axios';
import Inputs from './Inputs';
import ServiceList from './ServiceList';

export default function Getservice(props) {
  const [serviceId, setServiceId] = useState(null);
  const [count, setCount] = useState(0);
  const [service, setService] = useState(null);
  const [serviceList, setServiceList] = useState([]);

  console.log(service)
  console.log(props.user)

  const services = props.services;
  const serviceOptions = services.map((service) => ({
    label: service.name.toString(),
    value: service.id,
  }));

  return (
    <>
      <Autocomplete
        disablePortal
        isOptionEqualToValue={(option, value) => option.value === value.value}
        id="service ID"
        onChange={(e, selectedOption) => {
          setServiceId(selectedOption ? selectedOption.value : null);
          setCount(count + 1);
          setService(services.find(service => service.id === selectedOption.value));
        }}
        options={serviceOptions}
        getOptionLabel={(option) => option.label}
        sx={{ width: 195, margin: '0 auto', textAlign: 'center' }}
        renderInput={(params) => <TextField {...params} sx={{ textAlign: 'center' }} label="Add a service" />}
      />
      {/* <Button onClick={() => {}}>Add service</Button> */}
      <br />
      {service && count !==0 ? <ServiceList user={props.user} service={service} serviceList={serviceList} /> : null}
    </>
  );
}
