import React, { Component } from 'react'
import style from './style.scss';
interface IProps {
  onClick: () => void;
}
export default class Baner extends Component<IProps> {

  public render() {
    return (
      <div className={`section-center ${style.banner}`}>
        <div className={style.content}>
        <h1>Тестовое задание на позицию frontend разработчика Хайтек+</h1>
        <p>Присоединяйся к команде крутейшего технологического <span className='orange'>СМИ</span></p>
        <div className='btn' onClick={this.props.onClick}>Вступить</div>
        </div>
      </div>
    )
  }
}
