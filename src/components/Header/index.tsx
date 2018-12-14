import { connect } from '../connect';
import Header from './Header';

const ConnectedHeader = connect(
  ({
    authStore: {isAuth}
  }) => ({
    isAuth
  }),
  Header
)

export {ConnectedHeader as Header};