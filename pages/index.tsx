import React, {Component} from 'react'
import Template from '../src/components/templates';
import Baner from '../src/components/Baner';
import FuncBlock from '../src/components/FuncBlock';
import BlackBlock from '../src/components/BlackBlock';
import style from './scss/index.scss';

class Index extends Component {
  public $auth = React.createRef<HTMLDivElement>();
  
  public setScrollElement = (node: any) => {
    this.$auth = node;
  }

  public scrollTo = () => {
      window.scrollTo({
        top: this.$auth['offsetTop'], 
        behavior: "smooth"
    })
  } 

  public render() {
  return (
    <Template >
      <Baner onClick={this.scrollTo}/>
        <div className='content'>
          <div className='section-center section-center--content'>
            <h2>Краткое описание <span className='orange'>тестового задания</span></h2>
            <p>Необходимо сверстать и разработать небольшой адаптивный сайт (лендинг) который вы видите на данном макете. Сайт должен быть реализован на конкретном стеке технологий.</p>
            <p>Сайт состоит из двух страниц. Главной и Профиля. :) По умолчанию пользователь попадает на главную страницу. На страницу профиля может попасть только авторизованный пользователь. Неавторизованные пользователи должны быть переадресованы на главную.</p>
            <h4>Требуемый стек:</h4>
            <ul className={style.list}>
              <li><strong>Next.js</strong> (В качестве сервера и ядра всей системы)</li>
              <li><strong>React.js</strong> (В качетве UI библиотеки)</li>
              <li><strong>MobX</strong> (В качестве контейнера состояния)</li>
              <li><strong>TypeScript</strong> (Не обязательно, но реализация на нем будет несомненным плюсом)</li>
            </ul>
          </div>
        </div>
      <FuncBlock />
      <BlackBlock
      setScrollElement={this.setScrollElement}
      />
    </Template>
  )
  }
}

export default Index