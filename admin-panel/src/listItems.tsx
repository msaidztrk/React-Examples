import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import StarBorder from '@mui/icons-material/StarBorder'; 
import InboxIcon from '@mui/icons-material/MoveToInbox'; 
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore'; 
import BallotIcon from '@mui/icons-material/Ballot'; 

export const mainListItems = () => {
  const [userStatus, setUserStatus] = React.useState('0');

  // Access local storage and set user status
  React.useEffect(() => {
    let stor_arr: string = localStorage.getItem('array') as string;
    let userObj: { status: string } = JSON.parse(stor_arr) as { status: string };
    console.log("sidebar local : ", userObj);
    setUserStatus(userObj.status)
  }, []); // Empty dependency array to run effect only once 

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItemButton component={Link} to="/home">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton component={Link} to="/permissions">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Permissions" />
      </ListItemButton>

      <ListItemButton component={Link} to="/warehouse-list">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Warehouse Listesi" />
      </ListItemButton>


      {userStatus == '1' ?

        <>      
        <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <ListItemButton component={Link} to="/kullanici-ekle" sx={{ pl: 4 }}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Kullanıcı Ekle" />
          </ListItemButton>  

          <ListItemButton  component={Link} to="/kullanici-goruntule" sx={{ pl: 4 }}>
            <ListItemIcon>
              <BallotIcon />
            </ListItemIcon>
            <ListItemText primary="Kullanıcı Görüntüle" />
          </ListItemButton> 

       


        </List>
      </Collapse></>
        : ''}

      {/* Rest of your list items */}
    </React.Fragment>
  );
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);