import { observable } from 'mobx';
import BaseStore from "./baseStore";
import RootStore from './rootStore';

class DropdownStore extends BaseStore {

  @observable isRegistrationDropdownOpen: boolean = false;
  @observable isCatalogDropdownOpen: boolean = false;

  constructor(store: RootStore) {
    super(store);
  }

  setRegistrationDropdownOpenValue = (value: boolean) => {
    this.isRegistrationDropdownOpen = value
  };

  setCatalogDropdownOpen = (value: boolean) => {
    this.isCatalogDropdownOpen = value;
  }

  reset = () => {
    this.setCatalogDropdownOpen(false);
    this.setCatalogDropdownOpen(false);
  }

}

export default DropdownStore;