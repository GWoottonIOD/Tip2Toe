import React, {useState, useEffect} from 'react'
import Axios from '../../axios/Axios'
import Getservice from './GetService';
export default function GetServices(props) {
    const [count, setCount] = useState(0)
    const [services, setServices] = useState(null);
    console.log(services)
  return (
    <div>
        {count === 0 ? <Axios setResponse={setServices} call={'get'} type={'services'} setCount={setCount} count={count} /> : null}
        {services ? <Getservice services={services} user={props.user} userId={props.userId}/> : null}
    </div>
  )
}
