import { connect } from "../connect";
import LoginLinks, { LoginLinksProps } from './LoginLinks';

const ConnectedLoginLinks = connect<LoginLinksProps>(
  ({
    dropdownStore: {setRegistrationDropdownOpenValue, isRegistrationDropdownOpen}
  }) => ({
    setRegistrationDropdownOpenValue,
    isRegistrationDropdownOpen
  }),
  LoginLinks
);

export {ConnectedLoginLinks as LoginLinks};
