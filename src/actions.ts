function dfPO (data: any) {
  return {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
}

//TODO END Delete this
interface IUserStore {
  email: string;
  token: string;
  authChannel: string;
  user_name: string;
}

export const setUserStoreLocale = (user: IUserStore) => {
  localStorage.setItem('token', user.token);
  localStorage.setItem('authChannel', user.authChannel);
  localStorage.setItem('email', user.email);
  localStorage.setItem('user_name', user.user_name);
}
interface IgetUserStoreLocale {
    token: string;
    authChannel: string;
    email: string;
    user_name: string;
}
export const getUserStoreLocale: () => IgetUserStoreLocale = () => (
  {  
    token: localStorage.getItem('token') || '',
    authChannel: localStorage.getItem('authChannel') || '',
    email: localStorage.getItem('email') || '',
    user_name: localStorage.getItem('user_name') || ''
  }
)