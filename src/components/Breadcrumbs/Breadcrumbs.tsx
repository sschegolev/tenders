import * as React from 'react';
import { IBreadcrumb } from '../../stores/breadcrumbsStore';
import { Boilerplate, BreadcrumbLink, BreadcrumbsContainer, BreadcrumbSeparator } from './styles';

export interface BreadcrumbsProps {
  breadcrumbs: IBreadcrumb[];
}

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  const breadrumbsLength = breadcrumbs.length - 1;

  return (
    <BreadcrumbsContainer>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <React.Fragment key={index}>
            {!!breadcrumb.path ? (
              <BreadcrumbLink to={breadcrumb.path} key={index}>
                {breadcrumb.name}
              </BreadcrumbLink>
            ) : (
              <Boilerplate>{breadcrumb.name}</Boilerplate>
            )}
            {index !== breadrumbsLength && (
              <BreadcrumbSeparator src={'../assets/images/ic_arrow.png'} />
            )}
          </React.Fragment>
        );
      })}
    </BreadcrumbsContainer>
  );
};
