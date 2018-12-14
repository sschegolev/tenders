import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {FOOTER_FIRST_COLUMN, FOOTER_SECOND_COLUMN, FOOTER_THIRD_COLUMN} from '../../constants/footer-links';
import {SocialLinks} from '../Social/SocialLinks';
import {Subscribe} from '../Subscribe/Subscribe';
import {FooterLink} from './FooterLink/FooterLink';
import {FooterColumn, FooterColumnTitle, FooterComponent, FooterContent, FooterLogo} from './styles';

const Footer = ({history}: RouteComponentProps) => {
  const handleLinkClick = (route: string) => () => history.push(route);

  return (
    <FooterComponent>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <img src="../assets/images/footer_logo.svg" />
          </FooterLogo>
          {
            FOOTER_FIRST_COLUMN.map((item, index) => {
              return (
                <FooterLink
                  text={item.text}
                  key={`${index}_${item.text}`}
                  onLinkClick={handleLinkClick(item.link)}
                />
              )
            })
          }
        </FooterColumn>
        <FooterColumn>
          <FooterColumnTitle>
            Каталог
          </FooterColumnTitle>
          {
            FOOTER_SECOND_COLUMN.map((item, index) => {
              return (
                <FooterLink
                  text={item.text}
                  key={`${index}_${item.text}`}
                  onLinkClick={handleLinkClick(item.link)}
                />
              )
            })
          }
        </FooterColumn>
        <FooterColumn>
          <FooterColumnTitle>
            Полезная Информация
          </FooterColumnTitle>
          {
            FOOTER_THIRD_COLUMN.map((item, index) => {
              return (
                <FooterLink
                  text={item.text}
                  key={`${index}_${item.text}`}
                  onLinkClick={handleLinkClick(item.link)}
                />
              )
            })
          }
        </FooterColumn>
        <FooterColumn>
          <FooterColumnTitle>
            Подписаться на рассылку
          </FooterColumnTitle>
          <Subscribe />
          <SocialLinks />
        </FooterColumn>
      </FooterContent>
    </FooterComponent>
  )
}

export default withRouter(Footer);