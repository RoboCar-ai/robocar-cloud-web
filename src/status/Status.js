import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {getStatus} from './status.repository'
import {deactivateSession, createSession} from '../sessions/sessions.repository'

const styles = theme => ({
    
    buttonMargin: {
      margin: theme.spacing.unit * 2,
    }
  });

class Status extends React.Component {
    state = {
        name: '',
        status: '',
        count: null
    }

    async load() {
        const status = await getStatus();
        this.setState(status);
    }

    async componentWillMount() {
        await this.load()
    }

    handleDeactivate = async () => {
        await deactivateSession(this.state.name);
        await this.load();
    }

    handleActivate = async () => {
        await createSession(this.state.name);
        await this.load();
    }

    getActivateButton() {
        switch (this.state.status) {
            case 'active':
                return (<Button onClick={this.handleDeactivate} className={this.props.classes.buttonMargin} variant="contained" size="small" color="secondary">Deactivate</Button>);
            case 'inactive':
                return (<Button onClick={this.handleActivate} className={this.props.classes.buttonMargin} variant="contained" size="small" color="primary">activate</Button>);
            default:
                return null;
        }
    }

    render() {
        return (
            <div>
                <List>
                    <ListItem>
                        <strong>Session Name: </strong>
                        <ListItemText primary={this.state.name}/>
                    </ListItem>
                    <ListItem>
                        <strong>Session Status: </strong>
                        <ListItemText primary={this.state.status}/>
                    </ListItem>
                    <ListItem>
                        <strong>Session Count: </strong>
                        <ListItemText primary={this.state.count}/>
                    </ListItem>
                </List>
                {this.getActivateButton()}
            </div>
        );
    }

}


export default withStyles(styles)(Status);