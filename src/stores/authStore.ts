import {computed} from 'mobx';
import BaseStore from "./baseStore";
import RootStore from './rootStore';

class AuthStore extends BaseStore {

  @computed
  get isAuth() {
    return !!this.token;
  }

  token = '';

  constructor(store: RootStore) {
    super(store);
  }

  reset = () => {return;}
}

export default AuthStore;