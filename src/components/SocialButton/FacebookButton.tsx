import React, { Component } from 'react'
import style from './style.scss';
import FacebookAuth from 'react-facebook-auth';
import {IAuth} from './index';

interface IProps {
  title: string;
  callback: (data: IAuth) => void;
  id: string;
}

export default class FacebookButton extends Component<IProps, {}> {
  
  public handleAuthFb = (data: any) => {
    console.warn(data);
    const response = data.accessToken ?
    {
      ok: true,
      data: {
        user_name: data.name,
        email: data.email,
        token: data.accessToken,
        authChannel: 'fb'
      }
    } : {
      ok: false,
      err: data.error || 'some default err'
    }
    this.props.callback(response);
  }

  public FacebookButton = (title: string) => ({ onClick }: any) => (
    <div
      className={`${style.btn} ${style.vk}`}
      onClick={onClick}
      >
      <i className='fab fa-facebook-f'/>{title} 
    </div>
  );

  public render() {
    const {title} = this.props;
    return this.props.id ? <FacebookAuth
                appId={String(this.props.id)}
                callback={this.handleAuthFb}
                component={this.FacebookButton(title)}
                version="3.1"
          /> : null
  }
}
