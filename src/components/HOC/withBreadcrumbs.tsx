import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';

export const withBreadcrumbs = <P extends {}>(Component: React.ComponentType<P>) => {
  return class WithBreadcrumbs extends React.Component<P> {
    render() {
      return (
        <>
          <Breadcrumbs />
          <Component {...this.props} />
        </>
      );
    }
  };
};
