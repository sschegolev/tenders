import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ImageView } from '../../components/ImageView/ImageView';
import { PageSubTitle } from '../../components/PageSubTitle/PageSubTitle';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ExtendedTenderModel } from '../../models';
import { IBreadcrumb } from '../../stores/breadcrumbsStore';

export interface TenderPageProps {
  addBreadcrumb: (breadcrumb: IBreadcrumb) => void;
  fetchTender: (id: string) => Promise<ExtendedTenderModel>;
  tender: ExtendedTenderModel;
}

export class TenderPage extends React.Component<TenderPageProps & RouteComponentProps> {
  componentDidMount() {
    const {
      match: { params },
      fetchTender,
      addBreadcrumb
    } = this.props;
    fetchTender((params as any).id).then(tender => {
      addBreadcrumb({
        name: tender.goodsName,
        path: ''
      });
    });
  }

  render() {
    return (
      <>
        {this.props.tender && (
          <>
            <PageTitle title={this.props.tender.goodsName} />
            <PageSubTitle subTitle={this.props.tender.section} />
            <div>
              <ImageView images={this.props.tender.images} />
            </div>
          </>
        )}
      </>
    );
  }
}
