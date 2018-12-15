import React, { Component } from 'react';
import style from './style.scss';
import {inject, observer} from "mobx-react/custom";
import {getUserStoreLocale} from '../../actions';

interface IProps {
  store: {
    user_name: string;
    email: string;
  }
}
const host = 'https://hightech.fm/'
const shareButtons = [
  {
    title: 'Facebook',
    color: '#365b98',
    link: `https://www.facebook.com/sharer/sharer.php?u=${host}`
  },
  {
    title: 'Вконтакте',
    color: '#477499',
    link: `https://vk.com/share.php?url=${host}`
  },
  {
    title: 'Telegram',
    color: '#008acb',
    link: `tg://msg?text=${host}&to=${host}`
  },
  {
    title: 'WhatsApp',
    color: '#25d366',
    link: 'whatsapp://send?text=${host}'
  },
]

@inject('store')
@observer
class Profile extends Component<IProps> {
  componentDidMount() {
    const {user_name, email} = this.props.store;
    const user = !user_name || !email ? getUserStoreLocale() : null;
    if (user) {
      this.props.store.user_name = user.user_name;
      this.props.store.email = user.email;
    }
  }
  renderButton = (title: string, color: string, link: string, key: number) => (
    <li
    key={key}
    className={`btn ${style.btn_share}`}
    style={{background: color}}>
     <a href={link}>{title}</a>
    </li>
  )
  render() {
    return (
    <div className={`content ${style.profile} show-all-screen`}>
      <div className={`section-center section-center--content`}>
        <h1>Привет, {this.props.store.user_name}! Твой email: {this.props.store.email} Как видишь я завершил тестовое задание, все работает как надо.</h1>
        <p>Будет здорово, если ты поделишься моим результатом с командой</p>
        <ul className={`${style.list_share}`}>
          {shareButtons.map(({title, color, link}, key) => this.renderButton(title, color, link, key))}
        </ul>
        <h1>Перейти на главную <a href='https://hightech.fm/'>Хайтек+</a></h1>
      </div>
    </div>
    )
  }
}
export default Profile