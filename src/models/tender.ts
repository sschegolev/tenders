class TenderModel {

  id: string;
  timeToLeft?: string;
  name: string;
  price: number;
  goodsQuantity: number;
  participant: number;
  startDate: string;
  economy?: number;
  image?: string;

  constructor(tender: Partial<TenderModel>) {
    Object.assign(this, tender);
  }

}

export default TenderModel;