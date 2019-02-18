import { observable } from 'mobx';
import BaseStore from "./baseStore";
import RootStore from './rootStore';

class ModalStore extends BaseStore {

  @observable isNewTenderModalOpen: boolean = false;
  @observable isLegalPersonModalOpen: boolean = false;
  @observable isPrivatePersonModalOpen: boolean = false;

  constructor(store: RootStore) {
    super(store);
  }

  setNewTenderModalOpenValue = (value: boolean) => {
    this.isNewTenderModalOpen = value
  };

  setLegalPersonModalOpenValue = (value: boolean) => {
    this.isLegalPersonModalOpen = value
  };

  setPrivatePersonModalOpenValue = (value: boolean) => {
    this.isPrivatePersonModalOpen = value
  };

  reset = () => {return;}

}

export default ModalStore;