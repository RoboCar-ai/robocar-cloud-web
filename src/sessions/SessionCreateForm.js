import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit,
  },
  buttonMargin: {
    marginTop: theme.spacing.unit * 1.9,
    marginBottom: theme.spacing.unit * 1.9
  }
});

class SessionCreateForm extends React.Component {
  state = {
    name: ''
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleNewSession = _ => {
    this.props.handleNewSession(this.state.name);
    this.setState({name: ''})
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          label="New Session Name"
          onChange={this.handleChange}
          className={classes.textField}
          value={this.state.name}
          margin="normal"
          variant="outlined"
        />
        <Button onClick={this.handleNewSession} variant="contained" size="small" color="primary" className={classes.buttonMargin} disabled={!this.state.name} >
          Create Session
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SessionCreateForm);