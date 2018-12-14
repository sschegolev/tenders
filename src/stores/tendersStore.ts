import {observable} from 'mobx';
import TendersApi from '../api/tenderApi';
import {TenderModel} from '../models';
import BaseStore from "./baseStore";
import RootStore from './rootStore';

class TendersStore extends BaseStore {

  @observable hotTenders: TenderModel[] = [];
  @observable newTenders: TenderModel[] = [];
  @observable groupTenders: TenderModel[] = [];

  constructor(store: RootStore, private api: TendersApi) {
    super(store);
  }

  fetchAll = async() => {
    const hotTenders = await this.api.fetchHotTenders!();
    this.hotTenders = hotTenders.map((hotTender: any) => new TenderModel(hotTender));
    const newTenders = await this.api.fetchNewTenders!();
    this.newTenders = newTenders.map((newTender: any) => new TenderModel(newTender));
    const groupTenders = await this.api.fetchGroupTenders!();
    this.groupTenders = groupTenders.map((groupTender: any) => new TenderModel(groupTender));
  };

  reset = () => {
    this.hotTenders = [];
    this.newTenders = [];
    this.groupTenders = [];
  }

}

export default TendersStore;
