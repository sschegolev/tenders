import { connect } from "../../components/connect";
import LoginPage from "./LoginPage";


const connectedLoginPage = connect(
  ({
    authStore: {login}
  }) => ({
    login
  }),
  LoginPage
);

export { connectedLoginPage as LoginPage };
