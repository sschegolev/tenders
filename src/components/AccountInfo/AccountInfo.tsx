import * as React from 'react';
import { AccountItem } from './AccountItem';
import { AccountInfoWrapper } from './styles';

export const AccountInfo = () => (
  <AccountInfoWrapper>
    <AccountItem 
      value={0}
      currency={'руб'}
      title={'сэкономлено'}
    />
    <AccountItem 
      value={0}
      title={'создано'}
    />
    <AccountItem 
      value={0}
      title={'продано'}
    />
  </AccountInfoWrapper>
)