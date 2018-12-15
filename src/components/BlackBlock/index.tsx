import React, { Component } from 'react';
import SocialButton from '../SocialButton';
import CheckBox from '../CheckBox';
import style from './style.scss'

interface IState {
  isAgree: boolean;
  config: {
    fb: string;
    google: string;
    vk: string;
  }
}
interface IProps {
  setScrollElement: (node: HTMLDivElement) => void;

}
interface ISocialButton {
  title: string;
  type: 'fb' | 'vk' | 'google';
  id: string;
}

export default class BlackBlock extends Component<IProps, IState> {


  constructor(props: IProps) {
    super(props);
    this.state = {
      isAgree: false,
      config: {
        fb: '',
        vk: '',
        google: ''
      }
    }
  }
  public socialButtons:() => ISocialButton[] = () => ([
    {
      type: 'fb',
      title: 'Facebook',
      id: this.state.config.fb
    },
    {
      type: 'vk',
      title: 'Вконтакте',
      id: this.state.config.vk
    },
    {
      type: 'google',
      title: 'Google',
      id: this.state.config.google
    },
  ])
  public componentDidMount() {
    fetch(`/config`)
    .then(response => response.json())
    .then((data) => data && this.setState({config: {...data}}))
    .catch((err) => console.error(err));
  }

  public setRef = (node: HTMLDivElement) => {
    node && this.props.setScrollElement(node);
  }
  public renderSocialButton = () => (
    this.socialButtons().map(button => <SocialButton
      key={button.type}
      title={button.title}
      id={button.id}
      type={button.type}/>)
  )
  public render() {
    return (
      <div className={style.blackBlock} ref={this.setRef}>
      <div className='section-center section-center--content'>
       <h2>Я все сделал, что дальше?</h2>
        <p>
          Рабочий сайт необходимо разместить в сети на любой плафторме на ваш выбор, под https. Чтобы его можно было реально посмотреть и пощелкать с точки зрения пользователя и пощелкать.
        Исходный код необходимо разместить на GitHub. В репозитории должен присутствовать README.md с инструкцией по сборке и развертыванию.
        </p>
        <p>
            Рекомендуемое время выполнения тестового задания: 24 часа. 
            Любые вопросы по тестовому можно задавать в Telegram. (https://t.me/antonikucherov)
        </p>
        <ul className={style.btnList}>
          {this.renderSocialButton()}
        </ul>
        <div className={style.license}>
          <CheckBox />
          <p>
          Я принимаю <a href='/public/license.pdf'>пользовательское соглашение</a> и даю согласие на обработку персональных данных
          </p>
        </div>
      </div>

      </div>
    )
  }
}
