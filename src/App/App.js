import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    users: [],
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
