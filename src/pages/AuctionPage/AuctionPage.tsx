import * as React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Modals } from '../../components/Modals';
import RootStore from '../../stores/rootStore';
import { MainPage } from '../MainPage';

interface AuctionPageProps {
  rootStore: RootStore;
}

class AuctionPage extends React.Component<AuctionPageProps> {
  componentWillMount() {
    this.props.rootStore.start();
  }

  render() {
    return (
      <>
        <Header />
        <Modals />
        <MainPage />
        <Footer />
      </>
    );
  }
}

export default AuctionPage;
