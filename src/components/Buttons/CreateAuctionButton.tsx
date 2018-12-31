import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ROUTE_LOGIN_PAGE } from 'src/constants/router-links';
import { CreateAuction } from './styles';

interface CreateAuctionButtonProps {
  openNewTenderModal: () => void;
  isAuth: boolean;
}

const CreateAuctionButton: React.SFC<CreateAuctionButtonProps & RouteComponentProps> = ({
  openNewTenderModal,
  isAuth,
  history
}) => {
  const handleButtonClick = () => {
    if (isAuth) {
      openNewTenderModal();
    } else {
      history.push(ROUTE_LOGIN_PAGE);
    }
  };

  return <CreateAuction onClick={handleButtonClick}>создать аукцион</CreateAuction>;
};

export default withRouter(CreateAuctionButton);
