import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    users: [],
    // eslint-disable-next-line react/no-unused-state
    group1: [],
    // eslint-disable-next-line react/no-unused-state
    group2: [],
    // eslint-disable-next-line react/no-unused-state
    group3: [],
    // eslint-disable-next-line react/no-unused-state
    group4: [],
    // eslint-disable-next-line react/no-unused-state
    group5: [],
    // eslint-disable-next-line react/no-unused-state
    group6: [],
  };

  componentDidMount() {
    fetch(`http://localhost:8080/users`, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          users: json,
        })
      );
  }

  // eslint-disable-next-line class-methods-use-this
  handleClick() {
    fetch(`http://localhost:8080/users/split`, {
      method: 'get',
      // eslint-disable-next-line no-unused-vars
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }

  render() {
    return (
      <div data-testid="app" className="App">
        <div className="app_title">
          <span className="app_title">分组列表</span>
          <input
            className="spilt_button"
            type="button"
            value="分组学员"
            onClick={() => this.handleClick()}
          />
        </div>
        <div>
          <div className="buttom_title">成员列表</div>
          <div className="button_div">
            {this.state.users.map((user, index) => {
              return (
                <input
                  className="name_button"
                  type="button"
                  value={`${user.id}.${user.name}`}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
