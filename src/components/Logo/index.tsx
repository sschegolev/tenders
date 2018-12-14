import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { ROUTE_FUTURE_TENDERS } from 'src/constants/router-links';
import { StyledLogo } from './styles';

const Logo = ({
  history
}: RouteComponentProps) => {

  const logoClickHandler = () => history.push(ROUTE_FUTURE_TENDERS);

  return (
    <>
      <StyledLogo src="../assets/images/simple_logo.png" onClick={logoClickHandler}/>
    </>
  );
};

export default withRouter(Logo);
