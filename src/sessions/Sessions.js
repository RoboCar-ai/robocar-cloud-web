import React from 'react';
import SessionList from './SessionsList';

export default class Sessions extends React.Component {
  state = {
    sessions: []
  };

  componentWillMount() {
    console.log('updating sessions');
    fetch('http://localhost:5000/sessions')
      .then(res => res.json())
      .then(s => {
        console.log(s);
        this.setState({sessions: s});
      }).catch(console.log);
  }

  render() {
    console.log('context sess', this.context)
    return (
      <div>
        <SessionList sessions={this.state.sessions} open={true} />
      </div>
    );
  }

}