import * as React from 'react';
import { Title } from './styles';

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => <Title>{title}</Title>;
