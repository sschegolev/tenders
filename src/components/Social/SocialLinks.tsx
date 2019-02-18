import * as React from 'react';
import {Facebook} from './images/Facebook';
import {Twitter} from './images/Twitter';
import {SocialLinksContainer} from './styles';

export const SocialLinks = () => {
 return (
   <SocialLinksContainer>
     <Facebook />
     <Twitter />
   </SocialLinksContainer>
 )
}