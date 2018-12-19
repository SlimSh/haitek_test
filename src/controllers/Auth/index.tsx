import React, {Component} from 'react';
import Router from 'next/router';
import Loader from '../../components/Loader';

class Auth extends Component {
  public state = {
    isLoading: true
  }

  public componentDidMount () {
    const token = localStorage && localStorage.getItem('token');
    const authChannel = localStorage && localStorage.getItem('authChannel');
    token && authChannel ? this.checkToken(token, authChannel) : Router.push('/');
  }

  public checkToken = (token: string | null, authChannel: string | null) => {
    switch (authChannel) {
      case 'vk':
        this.checkVkAuth(token)
      case 'fb':
        this.checkFbAuth(token)
      case 'google':
        this.checkGoogleAuth(token)
      default:
      Router.push('/');
    
    }
  }

  private checkVkAuth = (token: string | null) => {
    fetch(`https://api.vk.com/method/secure.checkToken?token=${token}`)
    .then(response => response.json())
    .then(
      (data) => console.warn('Data Vk', data)
    ).catch(err => {
      console.error(err);
      Router.push('/');
    })
  }

  private checkFbAuth = (token: string | null) => {
    fetch(`https://graph.facebook.com/me?access_token=${token}`)
    .then(response => response.json())
    .then(
      (data) => data.id && data.name && this.setState({isLoading: false})
    ).catch(err => {
      console.error(err);
      Router.push('/');
    })
  }

  private checkGoogleAuth = (token: string | null) => {
    fetch(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`)
    .then(response => response.json())
    .then(
      (data) => data.verified_email && this.setState({isLoading: false})
    ).catch(err => {
      console.error(err);
      Router.push('/');
    })
  }

  public render() {
  return (this.state.isLoading ? <Loader /> : this.props.children);
  }
}

export default Auth