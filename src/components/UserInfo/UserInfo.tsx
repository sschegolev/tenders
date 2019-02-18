import * as React from 'react';

interface UserInfoProps {
  name: string;
}

const UserInfo:React.SFC<UserInfoProps> = ({name}) => (
  <div>
    {name}
  </div>
);

export default UserInfo;