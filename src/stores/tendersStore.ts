import { observable } from 'mobx';
import TendersApi from '../api/tendersApi';
import { TenderModel } from '../models';
import BaseStore from './baseStore';
import RootStore from './rootStore';

class TendersStore extends BaseStore {
  @observable hotTenders: TenderModel[] = [];
  @observable newTenders: TenderModel[] = [];
  @observable groupTenders: TenderModel[] = [];

  constructor(store: RootStore, private api: TendersApi) {
    super(store);
  }

  fetchAll = async () => {
    this.api.fetchHotTenders!().then(
      (tenders: any) => (this.hotTenders = tenders.map((tender: any) => new TenderModel(tender)))
    );
    this.api.fetchNewTenders!().then(
      (tenders: any) => (this.newTenders = tenders.map((tender: any) => new TenderModel(tender)))
    );
    this.api.fetchGroupTenders!().then(
      (tenders: any) => (this.groupTenders = tenders.map((tender: any) => new TenderModel(tender)))
    );
  };

  reset = () => {
    this.hotTenders = [];
    this.newTenders = [];
    this.groupTenders = [];
  };
}

export default TendersStore;
