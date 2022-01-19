import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';

const styles = () => ({
  toolbarRoot: {
    paddingRight: 24,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  title: {
    flexGrow: 1,
  },
});

const Header = (props) => {
  const { classes, handleToggleDrawer } = props;
  return (
    <AppBar position='fixed'>
      <Toolbar disableGutters={true} classes={{ root: classes.toolbarRoot }}>
        <IconButton
          color='inherit'
          aria-label='Open drawer'
          onClick={handleToggleDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          color='inherit'
          noWrap
          className={classes.title}
        >
          Dashboard
        </Typography>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color='inherit'>
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
