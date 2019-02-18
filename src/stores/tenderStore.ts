import { observable } from 'mobx';
import { TenderApi } from '../api/tenderApi';
import { ExtendedTenderModel } from '../models';
import BaseStore from './baseStore';
import RootStore from './rootStore';

class TenderStore extends BaseStore {
  @observable tender: ExtendedTenderModel;

  constructor(store: RootStore, private api: TenderApi) {
    super(store);
  }

  fetchTender = async (id: string) => {
    return this.api.fetchTender(id).then(tender => {
      this.tender = new ExtendedTenderModel(tender);
      return Promise.resolve(this.tender);
    });
  };

  reset = () => {
    return;
  };
}

export default TenderStore;
