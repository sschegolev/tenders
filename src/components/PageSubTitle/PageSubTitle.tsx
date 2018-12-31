import * as React from 'react';
import { SubTitle } from './styles';

interface PageSubTitleProps {
  subTitle: string;
}

export const PageSubTitle = ({ subTitle }: PageSubTitleProps) => <SubTitle>{subTitle}</SubTitle>;
