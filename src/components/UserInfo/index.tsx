import { connect } from "../connect";
import UserInfo from './UserInfo';

const ConnectedUserInfo = connect(
  ({
    userStore: {name}
  }) => ({
    name
  }),
  UserInfo
);

export {ConnectedUserInfo as UserInfo};