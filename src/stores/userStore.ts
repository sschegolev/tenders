import BaseStore from "./baseStore";
import RootStore from './rootStore';

class UserStore extends BaseStore {

  name: string = 'John Doe';

  constructor(store: RootStore) {
    super(store);
  }

  reset = () => {
    this.name = '';
  }

}

export default UserStore;