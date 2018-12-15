import React, { Component } from 'react';
import * as style from './style.scss';
interface IState {
  isActive: boolean;
}

export default class Checkbox extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isActive: false
    }
  }
  public render() {
    return (
      <div onClick={this.handleClick}>
        <div className={style.checkbox}>{this.state.isActive && <i className="fas fa-check" />}</div>
      </div>
    )
  }
  private handleClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }
}
