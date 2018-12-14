import * as React from 'react';
import {ErrorHintIcon, ErrorHintMessage} from './styles';

interface ErrorHintProps {
  error: string;
}

export const ErrorHint = ({error}: ErrorHintProps) => (
  <div>
    <ErrorHintIcon>!</ErrorHintIcon>
    <ErrorHintMessage>
      {error}
    </ErrorHintMessage>
  </div>
)