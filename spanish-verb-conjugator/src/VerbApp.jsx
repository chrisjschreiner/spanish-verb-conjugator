import React from 'react';
import VerbForm from './VerbForm';
import VerbList from './VerbList';

export default class VerbApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verbs: []
    };
  }

  addVerb = (verb) => {
    this.setState(state => ({
      verbs: state.verbs.concat([verb])
    }));
  }

  render() {
    return (
      <div>
        <h1>Spanish Verb Conjugator</h1>
        <VerbForm addVerb={this.addVerb} />
        <VerbList verbs={this.state.verbs} />
      </div>
    );
  }
}