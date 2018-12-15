import React, { Component } from 'react'
import style from './style.scss';
import VkAuth from 'react-vk-auth';
import {IAuth} from './index';

interface IProps {
  title: string;
  callback: (data: IAuth) => void;
  id: string;
}
export default class VkButton extends Component<IProps, {}> {
  
  
  public handleAuthVk = (data: any) => {
    const response = data.status === 'connected' ?
    {
      ok: true,
      data: {
        user_name: this.concatFio(data.session.user),
        email: data.session.user.href,
        token: data.session.sig,
        authChannel: 'vk'
      }
    } : {
      ok: false,
      err: data.status || 'some default err'
    }
    this.props.callback(response);
  }

  public concatFio = ({first_name, last_name}: any) => `${first_name} ${last_name}`
  public render() {
    const {title} = this.props;
    return ( this.props.id ?
        <VkAuth
          apiId={String(this.props.id)}
          callback={this.handleAuthVk}
          className={`${style.btn} ${style.vk}`}
          >
        <i className='fab fa-vk'/>{title} 
        </VkAuth> : null
    )
  }
}