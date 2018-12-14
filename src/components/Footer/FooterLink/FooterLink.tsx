import * as React from 'react';
import {Link} from './styles';

interface FooterLinkProps {
  onLinkClick: () => void;
  text: string;
}

export const FooterLink = ({onLinkClick, text}: FooterLinkProps) => (
  <Link
    onClick={onLinkClick}
  >
    {text}
  </Link>
);
