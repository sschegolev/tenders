import {RootStore} from './';

abstract class BaseStore {
  abstract reset: () => void;

  constructor(readonly rootStore: RootStore) {
    this.rootStore.registerStore(this);
  }
}

export default BaseStore;
