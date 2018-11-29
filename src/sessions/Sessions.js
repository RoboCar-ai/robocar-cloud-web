import React from 'react';
import SessionList from './SessionsList';
import SessionCreateForm from './SessionCreateForm'
import {getSessions, createSession} from './sessions.repository'

export default class Sessions extends React.Component {
  state = {
    sessions: []
  };

  loadSessions = async () => {
    const sessions = await getSessions()
    this.setState({sessions: sessions});
  }

  async componentWillMount() {
    this.loadSessions();
  }

  handleNewSession = async (name) => {
    await createSession(name);
    this.loadSessions();
  }

  render() {
    return (
      <div>
        <SessionCreateForm handleNewSession={this.handleNewSession}/>
        <SessionList sessions={this.state.sessions} open={true} />
      </div>
    );
  }

}