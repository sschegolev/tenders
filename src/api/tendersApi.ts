export interface TendersApi {
  fetchNewTenders?: () => Promise<any>;
  fetchHotTenders?: () => Promise<any>;
  fetchGroupTenders?: () => Promise<any>;
}

export class RestTendersApi implements TendersApi {}

// tslint:disable-next-line:max-classes-per-file
export class MockTendersApi implements TendersApi {
  fetchNewTenders = () =>
    Promise.resolve<any[]>([
      {
        id: '1231231231',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '35234',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '2342344',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '234234234',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '2342343244234',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '456456345',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      }
    ]);
  fetchHotTenders = () =>
    Promise.resolve<any[]>([
      {
        id: '1231231231',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '35234',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '2342344',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '234234234',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '2342343244234',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '456456345',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      }
    ]);
  fetchGroupTenders = () =>
    Promise.resolve<any[]>([
      {
        id: '1231231231',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '35234',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '2342344',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '234234234',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '2342343244234',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      },
      {
        id: '456456345',
        name: 'Apple IPhone 6S 500GB',
        price: 123,
        goodsQuantity: 1,
        participant: 0,
        startDate: '2018-12-12T17:33:27.669Z',
        economy: 15
      }
    ]);
}

export default TendersApi;
