import React, {Component} from 'react'
import Template from '../src/components/templates';
import Profile from '../src/components/Profile';
import Auth from '../src/controllers/Auth';

class Index extends Component {

  public render() {
  return (
    <Template >
      <Auth>
       <Profile />
      </Auth>
    </Template>
  )
  }
}

export default Index