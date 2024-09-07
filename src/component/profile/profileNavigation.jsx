import React from 'react';
import { Menu, MenuItem, Avatar, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ProfileNavigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} size="large">
        <Avatar>P</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          style: {
            backgroundColor: '#333',
            color: '#fff',
            marginTop: '45px',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <AccountCircleIcon style={{ marginRight: '10px', color: '#fff' }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SettingsIcon style={{ marginRight: '10px', color: '#fff' }} />
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LogoutIcon style={{ marginRight: '10px', color: '#fff' }} />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileNavigation;
