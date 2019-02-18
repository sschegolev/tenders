import { connect } from "../connect";
import { default as RegistrationChoice, RegistrationChoiceProps } from './RegistrationChoice';

const ConnectedRegistrationChoice = connect<RegistrationChoiceProps>(
  ({
    dropdownStore: {setRegistrationDropdownOpenValue},
    modalStore: {
      setLegalPersonModalOpenValue,
      setPrivatePersonModalOpenValue
    }
  }) => 
  ({
    closeRegistrationChoice: () => setRegistrationDropdownOpenValue(false),
    openLegalPersonRegistryModal: () => setLegalPersonModalOpenValue(true),
    openPrivatePersonRegistryModal: () => setPrivatePersonModalOpenValue(true)
  }),
  RegistrationChoice
);

export {ConnectedRegistrationChoice as RegistrationChoice};
