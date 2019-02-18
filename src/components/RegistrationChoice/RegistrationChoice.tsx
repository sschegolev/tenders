import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { ROUTE_INDIVIDUAL_REGISTRATION_PAGE, ROUTE_LEGAL_REGISTRATION_PAGE } from 'src/constants/router-links';
import Popup from '../Popup';
import { ChoiceButton } from './styles';

export interface RegistrationChoiceProps {
  closeRegistrationChoice: () => void;
  openLegalPersonRegistryModal: () => void;
  openPrivatePersonRegistryModal: () => void;
}

const RegistrationChoice = ({
  closeRegistrationChoice,
  history
}: RegistrationChoiceProps & RouteComponentProps) => {

  const closeRegistrationChoiceBlock = () => closeRegistrationChoice();
  const handlePrivatePersonClick = () => {
    closeRegistrationChoice();
    history.push(ROUTE_INDIVIDUAL_REGISTRATION_PAGE)
  };
  const handleLegalPersonClick = () => {
    closeRegistrationChoice();
    history.push(ROUTE_LEGAL_REGISTRATION_PAGE)
  };

  return (
    <Popup closeChild={closeRegistrationChoiceBlock}>
      <div>
        <ChoiceButton onClick={handlePrivatePersonClick}>Физическое лицо</ChoiceButton>
        <ChoiceButton onClick={handleLegalPersonClick}>Юридическое лицо</ChoiceButton>
      </div>
    </Popup>
  );

}

export default withRouter(RegistrationChoice);