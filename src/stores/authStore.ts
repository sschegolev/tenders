import {computed} from 'mobx';
import { AuthApi } from "../api";
import BaseStore from "./baseStore";
import RootStore from './rootStore';

class AuthStore extends BaseStore {

  @computed
  get isAuth() {
    return !!this.token;
  }

  token = '';

  constructor(store: RootStore, private api: AuthApi) {
    super(store);
  }

  registerIndividual = (registerData: any) => {
    return this.api.registerIndividual({
      Login: registerData.login,
      Email: registerData.email,
      Password: registerData.password,
      FullName:  registerData.name,
      Phone: registerData.phone
    });
  };

  login = (loginData: any) => {
    return this.api.login({
      Login: loginData.login,
      Password: loginData.password
    })
  }

  reset = () => {return;}
}

export default AuthStore;
