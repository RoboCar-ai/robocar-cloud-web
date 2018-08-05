import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from "react-router-dom";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class RoboDrawer extends React.Component {
  closeDrawer = () => () => {
    this.props.closeRequest();
  };

  render() {
    console.log('render drawer')
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <div>
            <Link to='/'>
              <ListItem button >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Status" />
              </ListItem>
            </Link>
            <Link to='/sessions'>
              <ListItem button >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Sessions" />
              </ListItem>
            </Link>
          </div>
        </List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    // const fullList = (
    //   <div className={classes.fullList}>
    //     <List>
    //       <div>
    //         <ListItem button onClick={this.props.history.push('/')}>
    //           <ListItemIcon>
    //             <InboxIcon />
    //           </ListItemIcon>
    //           <ListItemText primary="Sessions" />
    //         </ListItem>
    //       </div>
    //     </List>
    //     <Divider />
    //     <List>{otherMailFolderListItems}</List>
    //   </div>
    // );

    return (
      <div>
        <Drawer open={this.props.open} onClose={this.closeDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.closeDrawer('left', false)}
            onKeyDown={this.closeDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

const otherMailFolderListItems = (
  <div>
    
  </div>
);

RoboDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  closeRequest: PropTypes.func.isRequired
};

export default withStyles(styles)(RoboDrawer);
