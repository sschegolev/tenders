import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Logo from 'src/components/Logo';
import {AvatarManager} from '../../../components/AvatarManager/AvataManager';
import {LegalForm} from '../../../components/RegistrationForms/LegalForm/LegalForm';
import {Form, Page, Title} from '../styles';

const LegalRegistrationPage = ({history}: RouteComponentProps) => {
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
          <LegalForm
            onCancel={handleCancelButton}
          />
        </div>
      </Form>
    </Page>
  );
};

export default withRouter(LegalRegistrationPage);