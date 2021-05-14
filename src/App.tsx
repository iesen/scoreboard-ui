import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {teamOneScore: 0, teamTwoScore: 0}
  }

  render() {
    return (
      <div className="app">
        <header>
          <p>
            Süper Basket
          </p>
        </header>
        <section className="row-container">
          <div className="team">Takım 1 - {this.state.teamOneScore}</div>
          <div className="team">Takım 2 - {this.state.teamTwoScore}</div>
        </section>
        <section className="row-container">
          <button onClick={() => this.teamOneScoreUp(1)} className="control-button">1</button>
          <button onClick={() => this.teamOneScoreUp(2)} className="control-button">2</button>
          <button onClick={() => this.teamOneScoreUp(3)} className="control-button">3</button>
          <div className="control-separator">&nbsp;</div>
          <button onClick={() => this.teamOneScoreDown(1)} className="control-button">1</button>
          <button onClick={() => this.teamOneScoreDown(2)} className="control-button">2</button>
          <button onClick={() => this.teamOneScoreDown(3)} className="control-button">3</button>
        </section>
      </div>
    );
  }

  teamOneScoreUp(number: number): any {
    this.setState({
      teamOneScore: this.state.teamOneScore + number
    });
  }

  teamOneScoreDown(number: number): any {
    this.setState({
      teamTwoScore: this.state.teamTwoScore + number
    });
  }
}

export default App;
