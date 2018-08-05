import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default (props) => {
  const items = props.sessions;

  return (<List dense={true}>
      {items.map((item, i) => 
        (<ListItem key={i}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText
            primary={item}
            secondary={'Secondary text'}
          />
        </ListItem>)
      )}
    </List>);
}