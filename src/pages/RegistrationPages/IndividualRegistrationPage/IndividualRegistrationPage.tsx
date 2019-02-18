import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Logo from 'src/components/Logo';
import {AvatarManager} from '../../../components/AvatarManager/AvataManager';
import {IndividualForm} from '../../../components/RegistrationForms/IndividualForm/IndividualForm';
import {Form, Page, Title} from '../styles';


interface IndividualRegistrationPageProps {
  registerIndividual: (data: any) => Promise<void>;
}

const IndividualRegistrationPage = ({
  history,
  registerIndividual
}: IndividualRegistrationPageProps & RouteComponentProps) => {
  const handleCancelButton = () => {
    history.push('/')
  };

  const handleSubmit = (data: any) => {
    registerIndividual(data)
      .then(() => {
        history.push('/login')
      });
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
            onSubmit={handleSubmit}
            onCancel={handleCancelButton}
          />
        </div>
      </Form>
    </Page>
  );
};

export default withRouter(IndividualRegistrationPage);
