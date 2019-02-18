import { connect } from '../connect';
import CreateAuctionButton from './CreateAuctionButton';

const ConnectedCreateAuctionButton = connect(
  ({
    modalStore: {setNewTenderModalOpenValue},
    authStore: {isAuth}
  }) => ({
    openNewTenderModal: () => setNewTenderModalOpenValue(true),
    isAuth
  }),
  CreateAuctionButton
)

export {ConnectedCreateAuctionButton as CreateAuctionButton};