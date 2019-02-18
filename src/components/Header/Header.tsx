import * as React from 'react';
import { AccountInfo } from '../AccountInfo/AccountInfo';
import { CreateAuctionButton } from '../Buttons';
import { Catalog } from '../Catalog';
import {LoginLinks} from '../LoginLinks';
import Logo from '../Logo';
import RouterLinks from '../RouterLinks';
import { Search } from '../Search/Search';
import {UserInfo} from '../UserInfo';
import {DownHeader, HeaderComponent, IdentifyBlock, UpHeader} from './styles';

interface HeaderProps {
  isAuth: boolean;
}

class Header extends React.Component<HeaderProps> {
  render () {
    return (
      <HeaderComponent>
        <UpHeader>
          <Logo />
          <RouterLinks /> 
          <CreateAuctionButton />
          <IdentifyBlock>
            {
              this.props.isAuth ? <UserInfo /> : <LoginLinks />
            }
          </IdentifyBlock>
        </UpHeader>
        <DownHeader>
          <Catalog />
          <Search />
          <AccountInfo />
        </DownHeader>
      </HeaderComponent>
    )
  }
  
};

export default Header;