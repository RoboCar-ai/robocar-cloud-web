import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import SessionCreateForm from './SessionCreateForm'

const nestedStyle = {
  paddingLeft: '3em',
}

export default (props) => {
  const items = props.sessions;

  return (
    <div>
      <SessionCreateForm />
      <List dense={true}>
        {items.map((item, i) => <SessionItem key={i} session={item} open={false}/>)}
      </List>
    </div>);
}

class SessionItem extends React.Component {
  state = {
    open: this.props.open
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    return (
      <List component='div' disablePadding>
        <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText
              primary={this.props.session.name}
              secondary={`History Count: ${this.props.session.history.length}`}
            />
            {this.props.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {this.props.session.history.map((item, i) => mapToListItem(item, i))}
          </List>
        </Collapse>
    </List>
    );
  }

}

function mapToListItem(item, i) {
  return (
    <ListItem button style={nestedStyle}>
      <ListItemIcon>
        <DirectionsCar />
      </ListItemIcon>
      <ListItemText inset primary={item} />
    </ListItem>
  )
}