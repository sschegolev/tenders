import { connect } from "../../components/connect";
import IndividualRegistrationPage from "./IndividualRegistrationPage/IndividualRegistrationPage";


const ConnectedIndividualRegistrationPage = connect(
  ({
    authStore: { registerIndividual }
  }) => ({
    registerIndividual
  }),
  IndividualRegistrationPage
);


export {default as LegalRegistrationPage} from "./LegalRegistrationPage/LegalRegistrationPage";
export {ConnectedIndividualRegistrationPage as IndividualRegistrationPage};
