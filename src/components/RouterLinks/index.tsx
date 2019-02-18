import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  ROUTE_ABOUT,
  ROUTE_BLOG,
  ROUTE_GROUP_TENDERS,
  ROUTE_HOME_PAGE,
  ROUTE_HOW_TO_CREATE_TENDER,
  ROUTE_RATINGS,
  ROUTE_TENDER_ARCHIVE
} from 'src/constants/router-links';
import { RouterLink, StyledLink } from './styles';

interface RouterLinksState {
  pathname: string;
}

class RouterLinks extends React.Component<{} & RouteComponentProps, RouterLinksState> {
  state = {
    pathname: '/'
  };

  componentDidMount() {
    this.setState({
      pathname: this.props.history.location.pathname
    });
  }

  handleLinkClick = (route: string) => () => {
    this.props.history.push(route);
    // tslint:disable-next-line:no-console
    this.setState({
      pathname: route
    });
  };

  render() {
    const { pathname } = this.state;
    return (
      <RouterLink>
        <StyledLink
          isActive={pathname === ROUTE_HOME_PAGE}
          onClick={this.handleLinkClick(ROUTE_HOME_PAGE)}
        >
          Предстоящие аукционы
        </StyledLink>
        <StyledLink
          isActive={pathname === ROUTE_GROUP_TENDERS}
          onClick={this.handleLinkClick(ROUTE_GROUP_TENDERS)}
        >
          Групповые тендеры
        </StyledLink>
        <StyledLink
          isActive={pathname === ROUTE_HOW_TO_CREATE_TENDER}
          onClick={this.handleLinkClick(ROUTE_HOW_TO_CREATE_TENDER)}
        >
          Как создать тендер
        </StyledLink>
        <StyledLink isActive={pathname === ROUTE_BLOG} onClick={this.handleLinkClick(ROUTE_BLOG)}>
          Блог
        </StyledLink>
        <StyledLink isActive={pathname === ROUTE_ABOUT} onClick={this.handleLinkClick(ROUTE_ABOUT)}>
          Как мы работаем
        </StyledLink>
        <StyledLink
          isActive={pathname === ROUTE_TENDER_ARCHIVE}
          onClick={this.handleLinkClick(ROUTE_TENDER_ARCHIVE)}
        >
          Архив тендеров
        </StyledLink>
        <StyledLink
          isActive={pathname === ROUTE_RATINGS}
          onClick={this.handleLinkClick(ROUTE_RATINGS)}
        >
          Рейтинги
        </StyledLink>
      </RouterLink>
    );
  }
}

export default withRouter(RouterLinks);
