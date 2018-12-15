import React from 'react';
import * as logo from './img/logo.png';
import style from './style.scss';
import Router from 'next/router';

export default function Header() {
  const returnHome = () => {
    Router.push('/')
  }
  return (
    <div className={style.header}>
      <div className='section-center'>
        <img src={logo} alt="logo" onClick={returnHome}/>
      </div>
    </div>
  )
}
