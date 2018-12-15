import React, { Component } from 'react'
import style from './style.scss';
import GoogleAuthorize from 'react-google-authorize';
import {IAuth} from './index';

interface IProps {
  title: string;
  callback: (data: IAuth) => void;
  id: string;
}

export default class GoggleButton extends Component<IProps, {}> {

  public handleAuthGoogle = (data: any) => {
    const token = data.access_token;
    fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`)
    .then(response => response.json())
    .then(data => {
          const response = 
          {
            ok: true,
            data: {
              user_name: `${data.family_name} ${data.given_name}`,
              email: data.email,
              token: token,
              authChannel: 'google'
            }
          } 
    this.props.callback(response);
    })
    .catch((err) => {
      const response = {
        ok: false,
        err: err || 'some default err'
      }
      this.props.callback(response);
    });
  }

  public failAuthGoogle = (err: string) => {
    const response = {
      ok: false,
      err: err || 'some default err'
    }
    this.props.callback(response);
  }
  public render() {
    const {title} = this.props;
    return (

            <GoogleAuthorize
              clientId={String(this.props.id)}
              onSuccess={this.handleAuthGoogle}
              onFailure={this.failAuthGoogle}
              className={`${style.btn} ${style.google}`}
            >
              <span><i className='fab fa-google'/>{title}</span>
            </GoogleAuthorize>
  )
  }
}