import React from 'react';
import SessionList from './SessionsList';

export default class Sessions extends React.Component {
  state = {
    sessions: []
  }

  componentWillMount() {
    console.log('updating sessions');
    fetch('https://us-central1-sacred-reality-201417.cloudfunctions.net/get-sessions-webhook', {
      headers: {"Authorization": "05R9TRJr3Mx$qH"}
    }).then(res => res.json())
    .then(s => {
      this.setState({sessions: s})
      console.log('updated state', this.state.sessions)
    }).catch(console.log);
  }

  render() {
    console.log('context sess', this.context)
    return (
      <div>
        <SessionList sessions={this.state.sessions} />
      </div>
    );
  }

}