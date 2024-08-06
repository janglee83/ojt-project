import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { login } from '../api/user';

interface UserAuthLoginInterface {
  email: string;
  password: string;
}

export const useUserStore = defineStore('user', () => {
  const initialUserAuthLogin: UserAuthLoginInterface = {
    email: '',
    password: '',
  };

  const userAuthLogin = reactive<UserAuthLoginInterface>({
    ...initialUserAuthLogin,
  });

  const resetUserAuthLogin = () => {
    Object.assign(userAuthLogin, initialUserAuthLogin);
  };

  const handleLogin = () => {
    try {
      const response = login({
        email: 'giangle602@gmail.com',
        password: '123456',
      });
      console.log(response.response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    userAuthLogin,
    resetUserAuthLogin,
    handleLogin,
  };
});
