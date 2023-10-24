import React, { useEffect, useState } from 'react';
import { List, ListItemIcon, ListItemText, ListItemButton, ListSubheader,
   Collapse, Button, Container } from '@mui/material/';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Inputs from './Inputs';

export default function ServiceList(props) {
  const [serviceList, setServiceList] = useState([]);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleRemove = (thing) => {
      setServiceList(serviceList.filter(item => item !== thing));
  };

  useEffect(() => {
    if (props.service && !serviceList.some(item => item.id === props.service.id)) {
      setServiceList(prevServiceList => [...prevServiceList, props.service]);
    }
  }, [props.service]);

  return (
    <>
    <Container>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Booking services
          </ListSubheader>
        }
      >
          <React.Fragment>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={props.user.name} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {serviceList.map((service, serviceIndex) => (
                  <ListItemButton key={serviceIndex} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary={service.name} />
                    <Button onClick={() => handleRemove(service)}>
                      <ClearIcon />
                    </Button>
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
      </List>
      <Inputs serviceList={serviceList} user={props.user} userId={props.user.id}/>
      </Container>
    </>
  );
}
