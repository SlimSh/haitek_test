import {observable, autorun } from 'mobx';

interface AppStore {
  user_name: string;
  email: string;
}


class AppStore {
   @observable user_name: string = ''
   @observable email: string = ''
}

var store = new AppStore();
export default store

autorun(()=>console.log(store.user_name))