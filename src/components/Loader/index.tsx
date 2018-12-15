import React from 'react';
import style from './style.scss';

export default function Loader() {
  return (
    <div className={`content show-all-screen ${style.loader}`}>
      <div className={`section-center section-center--content`}>
        <i className={'fas fa-spinner loader'} />
      </div>
    </div>
  )
}
