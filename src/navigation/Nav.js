import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from './Drawer';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class RoboNav extends React.Component {
  state = {
    showMenu: false
  } 
  
  render() {
    const { classes, title } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} onClick={this.openMenu.bind(this)} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {title}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.showMenu} closeRequest={this.drawerCloseRequested}/>
      </div>
    );
  }

  openMenu() {
    this.setState({
      showMenu: true
    });
  }

  drawerCloseRequested = () => {
    this.setState({
      showMenu: false
    });
  }
}

RoboNav.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
};

export default withStyles(styles)(RoboNav);
