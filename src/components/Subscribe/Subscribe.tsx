import * as React from 'react';
import {SubscribeButton, SubscribeContainer, SubscribeInput} from './styles';

export const Subscribe = () => {
  return (
    <SubscribeContainer>
      <SubscribeInput
        type='email'
        placeholder='Ваш e-mail'
      />
      <SubscribeButton>
        Подписаться
      </SubscribeButton>
    </SubscribeContainer>
  )
};
