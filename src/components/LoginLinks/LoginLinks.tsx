import * as React from 'react';
import { ROUTE_LOGIN_PAGE } from 'src/constants/router-links';
import { RegistrationChoice } from '../RegistrationChoice';
import { LoginBlock, LoginButton, RegistrationButton, Separator } from './styles';

export interface LoginLinksProps {
  setRegistrationDropdownOpenValue: (value: boolean) => void;
  isRegistrationDropdownOpen: boolean
}

const LoginLinks = ({
  setRegistrationDropdownOpenValue,
  isRegistrationDropdownOpen
}: LoginLinksProps) => {

  const handleRegistrationClick = () => setRegistrationDropdownOpenValue(true);

  return (
    <LoginBlock>
      <LoginButton to={ROUTE_LOGIN_PAGE}>Вход</LoginButton>
      <Separator> | </Separator>
      <RegistrationButton onClick={handleRegistrationClick}>Регистрация</RegistrationButton>
      {
        isRegistrationDropdownOpen && (<RegistrationChoice />)
      }
    </LoginBlock>
  )

};

export default LoginLinks;
