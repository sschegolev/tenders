import {withRouter} from 'react-router';
import {connect} from '../../components/connect';
import {TendersPage, TendersPageProps} from './TendersPage';

const ConnectedTendersPage = connect<TendersPageProps>(
  ({
    tendersStore: {fetchAll, hotTenders, groupTenders, newTenders}
  }) => ({
    fetchTenders: fetchAll,
    hotTenders,
    groupTenders,
    newTenders
  }),
  withRouter(TendersPage)
);

export {ConnectedTendersPage as TendersPage};