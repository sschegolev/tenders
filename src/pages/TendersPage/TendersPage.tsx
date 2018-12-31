import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import TenderCarousel from 'src/components/TenderCarousel/TenderCarousel';
import { ROUTE_TENDER } from '../../constants/router-links';
import { TenderModel } from '../../models';
import { AdsBlock, Page, TenderBlock, TendersBlock, TenderTitle } from './styles';

export interface TendersPageProps {
  fetchTenders: () => void;
  hotTenders: TenderModel[];
  groupTenders: TenderModel[];
  newTenders: TenderModel[];
}

export class TendersPage extends React.Component<TendersPageProps & RouteComponentProps> {
  componentDidMount() {
    this.props.fetchTenders();
  }

  handleCardClick = (id: string) => {
    this.props.history.push(`${ROUTE_TENDER}/${id}`);
  };

  render() {
    const { hotTenders, groupTenders, newTenders } = this.props;
    return (
      <Page>
        <TendersBlock>
          {hotTenders && (
            <TenderBlock>
              <TenderTitle>Горящие аукционы</TenderTitle>
              <TenderCarousel tenders={hotTenders} handleCardClick={this.handleCardClick} />
            </TenderBlock>
          )}
          {groupTenders && (
            <TenderBlock>
              <TenderTitle>Новые аукционы</TenderTitle>
              <TenderCarousel tenders={groupTenders} handleCardClick={this.handleCardClick} />
            </TenderBlock>
          )}
          {newTenders && (
            <TenderBlock>
              <TenderTitle>Групповые аукционы</TenderTitle>
              <TenderCarousel tenders={newTenders} handleCardClick={this.handleCardClick} />
            </TenderBlock>
          )}
        </TendersBlock>
        <AdsBlock />
      </Page>
    );
  }
}
