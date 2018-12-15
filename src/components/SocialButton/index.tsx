import React, { Component } from 'react';
import FacebookButton from './FacebookButton';
import VkButton from './VkButton';
import GoggleButton from './GoggleButton';
import {inject, observer} from "mobx-react/custom";
import {setUserStoreLocale} from '../../actions';
import Router from 'next/router';

interface IProps {
  type: 'fb' | 'vk' | 'google';
  title: string;
  id: string;
  store?: {
    user_name: string;
    email: string;
    err?: string;
  }
}

export interface IAuth {
  ok: boolean;
  data?: {
    user_name: string;
    email: string;
    token: string;
    authChannel: string;
  }
  err?: string;
}

@inject('store')
@observer
export default class Button extends Component<IProps, {}> {

  public getButton = ({type, title, id}:IProps) => {
    switch (type) {
      case 'fb':
        return <FacebookButton
                  title={title}
                  callback={this.handleAuth}
                  id={id}
              />
      case 'vk':
        return <VkButton
                  title={title}
                  callback={this.handleAuth}
                  id={id}
              />
      case 'google':
        return <GoggleButton
                  title={title}
                  callback={this.handleAuth}
                  id={id}
                />
      default:
        return null;
    }
  }

  public handleAuth = (response: IAuth) => {
    const {ok, data, err} = response;
    if (ok && data) {
      const {store} = this.props;
      setUserStoreLocale(data);
      if (store) {
        store.user_name = data.user_name;
        store.email = data.email;
      }
      Router.push('/profile');
    } else {
      console.error('Fail auth', err);
    }
  }

  public render() {
    return (
      <div>
        {this.getButton(this.props)}
      </div>
    )
  }
}
