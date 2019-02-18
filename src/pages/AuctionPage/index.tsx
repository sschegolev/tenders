import {connect} from '../../components/connect';
import RootStore from '../../stores/rootStore';
import AuctionPage from './AuctionPage';

const ConnectedAuctionPage = connect(
  (rootStore: RootStore) => ({
    rootStore
  }),
  AuctionPage
);

export {ConnectedAuctionPage as AuctionPage};
