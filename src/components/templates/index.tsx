import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Head from 'next/head';
import * as normalize from '../../assets/scss/normalize.scss';
import * as global from '../../assets/scss/global.scss';
import store from '../../store';
import {Provider} from 'mobx-react';

class Template extends Component {
  public render() {
    return (
      <Provider store={store}>
      <div>
        <Head>
          <style jsx global>{normalize}</style>
          <style jsx global>{global}</style>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.0/css/all.css" integrity="sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h" crossOrigin="anonymous" />
        </Head>
        <Header />
        {this.props.children}
        <Footer />
      </div>
      </Provider>
    )
  }
}
export default Template;
