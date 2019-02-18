import * as React from 'react';
import { AccountItemCurrency, AccountItemTitle, AccountItemValue, AccountItemWrapper } from './styles';

interface AccountItemProps {
  value: number;
  title: string;
  currency?: string;
}

export const AccountItem = ({
  value,
  title,
  currency
}: AccountItemProps) => (
  <AccountItemWrapper>
    <AccountItemValue>
      {value} <AccountItemCurrency>{currency}</AccountItemCurrency>
    </AccountItemValue>
    <AccountItemTitle>
      {title}
    </AccountItemTitle>
  </AccountItemWrapper>
)