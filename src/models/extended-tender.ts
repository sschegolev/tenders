class ExtendedTenderModel {
  id: string;
  goodsName: string;
  section: string;
  images: string[];
  description: string;
  maxPrice: number;
  name: string;
  goodsQuantity: number;
  delivery: string;
  tenderStartDate: string;

  constructor(tender: Partial<ExtendedTenderModel>) {
    Object.assign(this, tender);
  }
}

export default ExtendedTenderModel;
