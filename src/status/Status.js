import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {getStatus} from './status.repository'

export default class Sessions extends React.Component {
    state = {
        name: '',
        status: '',
        count: null
    }

    async componentWillMount() {
        const status = await getStatus();
        this.setState(status);
    }

    

    render() {
        return (<List>
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
        </List>);
    }

}