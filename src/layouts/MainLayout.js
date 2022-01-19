import React, { Fragment, useState } from 'react';
import { withStyles } from '@mui/styles';
import classNames from 'classnames';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing(9),
    padding: theme.spacing(3),
    marginTop: theme.spacing(7),
    overflowX: 'hidden',
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

const MainLayout = ({ classes, children }) => {
  const [open, setOpen] = useState(false);
  const handleToggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <div className={classes.root}>
        <Header handleToggleDrawer={handleToggleDrawer} />
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          {children}
        </main>
      </div>
      <Sidebar open={open} drawerWidth={drawerWidth} />
    </Fragment>
  );
};

export default withStyles(styles)(MainLayout);
