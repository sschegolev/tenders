import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Logo from 'src/components/Logo';
import {AvatarManager} from '../../../components/AvatarManager/AvataManager';
import {IndividualForm} from '../../../components/RegistrationForms/IndividualForm/IndividualForm';
import {Form, Page, Title} from '../styles';

const IndividualRegistrationPage = ({history}: RouteComponentProps) => {
  const handleCancelButton = () => {
    history.push('/')
  };

  return (
    <Page>
      <Form>
        <Logo />
        <Title>
          Создание физического лица
        </Title>
        <AvatarManager />
        <div>
          <IndividualForm
            onCancel={handleCancelButton}
          />
        </div>
      </Form>
    </Page>
  );
};

export default withRouter(IndividualRegistrationPage);