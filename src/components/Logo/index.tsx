import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { ROUTE_HOME_PAGE } from 'src/constants/router-links';
import { StyledLogo } from './styles';

const Logo = ({ history }: RouteComponentProps) => {
  const logoClickHandler = () => history.push(ROUTE_HOME_PAGE);

  return (
    <>
      <StyledLogo src="../assets/images/simple_logo.png" onClick={logoClickHandler} />
    </>
  );
};

export default withRouter(Logo);
