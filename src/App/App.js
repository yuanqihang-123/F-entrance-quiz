import React, { Component } from 'react';
import './App.scss';

// TODO GTB-1: * 页面样式基本上没有，只有一定层度的布局
// TODO GTB-1: * 实现分组列表 学员列表功能，但刷新后没有显示分组列表
// TODO GTB-2: * 没有测试
// TODO GTB-3: * 没有做组件拆分，只有一个App组件，思考如何拆分与复用组件
// TODO GTB-3: * 没有使用语义化标签
// TODO GTB-3: * 没有使用flex，写了scss及样式但没有用到什么知识点，也没有用到scss任何特性
// TODO GTB-3: * 运用了ES6+语法及fetch
// TODO GTB-3: * 运用React相关知识点，但未拆分组件，一些知识点无法验证
// TODO GTB-4: * 有小步提交意识，但提交可以更小步，如拆分组件后以组件粒度等
// TODO GTB-4: * 没有抽出Api请求层
// TODO GTB-4: * 没有做组件拆分，App组件过长
// TODO GTB-4: * 没有组件拆分所以scss也没有拆分
// TODO GTB-4: * 分组数据设计有点问题，多少个组是应该是后端告诉你的
class App extends Component {
  // TODO GTB-4: - 不要滥用eslint disable功能，要自己动手试试改eslint的error
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    users: [],
    // TODO GTB-4: - 不应该写死6个组，应该由后端返回给你
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
    // TODO GTB-4: - 可以抽出API请求层，解耦请求与渲染
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
        // eslint-disable-next-line no-eval
        const obj = eval(json);
        console.log(obj['1 组'].length);
        this.setState({
          group1: obj['1 组'],
          group2: obj['2 组'],
          group3: obj['3 组'],
          group4: obj['4 组'],
          group5: obj['5 组'],
          group6: obj['6 组'],
        });
      });
  }

  // TODO GTB-4: - 未拆分组件，导致下面jsx嵌套过深，可读性较差
  render() {
    return (
      // TODO GTB-3: - 加强语义化标签的使用
      <div data-testid="app" className="App">
        {/* TODO GTB-4: - 标签class命名格式约定为a-b-c */}
        <div className="app_title">
          <span className="app_title">分组列表</span>
          <input
            className="spilt_button"
            type="button"
            value="分组学员"
            // TODO GTB-3: - 这里可以直接写{this.handleClick}，定义那里改成箭头函数
            onClick={() => this.handleClick()}
          />
        </div>
        {/* TODO GTB-4: - 组数不是死的，而是后端返回的 */}
        {this.state.group1.length > 0 && (
          <div>
            <div>1 组</div>
            <div className="button_div">
              {this.state.group1.map((user, index) => {
                return (
                  // TODO GTB-4: - 一般不推荐使用index作为key，可以使用id等
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
        )}
        {this.state.group1.length > 0 && (
          <div>
            <div>2 组</div>
            <div className="button_div">
              {this.state.group2.map((user, index) => {
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
        )}
        {this.state.group1.length > 0 && (
          <div>
            <div>3 组</div>
            <div className="button_div">
              {this.state.group3.map((user, index) => {
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
        )}
        {this.state.group1.length > 0 && (
          <div>
            <div>4 组</div>
            <div className="button_div">
              {this.state.group4.map((user, index) => {
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
        )}
        {this.state.group1.length > 0 && (
          <div>
            <div>5 组</div>
            <div className="button_div">
              {this.state.group5.map((user, index) => {
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
        )}
        {this.state.group1.length > 0 && (
          <div>
            <div>6 组</div>
            <div className="button_div">
              {this.state.group6.map((user, index) => {
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
        )}

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
