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
//TODO Delete this

export async function getAllUsers() {
  let users = await fetch("/users/all");
  return users.json();
};

export async function removeUser(_id: string) {
  const rawResponse = await fetch('users/remove', dfPO({id:_id}));
  const result = await rawResponse.json();
  return result;
};

export async function signUp(user: any) {
  const addUserReq = await fetch('auth/signUp', dfPO(user));
  const result = await addUserReq.json();

  return result;
}

export async function auth(data: any) {
  const addUserReq = await fetch('/auth', dfPO(data));
  // const result = await addUserReq.json();

  return addUserReq;
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