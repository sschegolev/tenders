import * as React from 'react';
import { CreateAuction } from './styles';
// tslint:disable-next-line:ordered-imports
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ROUTE_LOGIN_PAGE } from 'src/constants/router-links';

interface CreateAuctionButtonProps {
  openNewTenderModal: () => void;
  isAuth: boolean;
}

const CreateAuctionButton:React.SFC<CreateAuctionButtonProps & RouteComponentProps> = ({
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
  }

  return (
    <CreateAuction onClick={handleButtonClick}>
      создать аукцион
    </CreateAuction>
  )

};

export default withRouter(CreateAuctionButton);
