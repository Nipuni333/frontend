import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import OrdersIcon from '@mui/icons-material/ShoppingCart';
import FavoritesIcon from '@mui/icons-material/Favorite';
import AddressIcon from '@mui/icons-material/Home';
import PaymentsIcon from '@mui/icons-material/CreditCard';
import NotificationIcon from '@mui/icons-material/Notifications';
import EventsIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';

const Profile = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000' }}>
      <div style={{ padding: '20px', backgroundColor: '#FF007F', color: '#fff', fontWeight: 'bold' }}>
        <h1>Ruu Food</h1>
      </div>
      <List style={{ flex: 1, padding: '10px', color: '#fff' }}>
        <ListItem button>
          <ListItemIcon>
            <OrdersIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <FavoritesIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <AddressIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Address" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <PaymentsIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <NotificationIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Notification" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <EventsIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
}

export default Profile;
