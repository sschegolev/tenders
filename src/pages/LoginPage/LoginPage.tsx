import {
  Field,
  Form,
  Formik
} from 'formik';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Logo from 'src/components/Logo';
import * as Yup from 'yup';
import {ErrorHint} from '../../components/ErrorHint/ErrorHint';
import { Login, LoginEnter, LoginFooter, LoginInput, LoginWrapper, SubmitButton } from './styles';

const requiredErrorMessage = (fieldName: string) =>
    `Поле ${fieldName} не должно быть пустым`;


interface LoginPageProps {
  login: (data: any) => Promise<void>
}

const LoginPage = ({
  history,
  login
}: RouteComponentProps & LoginPageProps) => {

  const handleSubmit = (data: any) => {
    login(data)
      .then(() => {
        history.push('/')
      });
  };

  return (
    <LoginWrapper>
      <Login>
        <Logo />
        <LoginEnter>
          Вход
        </LoginEnter>
        <Formik
        onSubmit={handleSubmit}
        initialValues={{password: '', login: ''}}
        validationSchema={
          Yup.object().shape({
            password: Yup.string()
              .trim()
              .required(requiredErrorMessage('Password')),
            login: Yup.string()
            .trim()
            .required(requiredErrorMessage('Login'))
          })
        }
        // tslint:disable-next-line:jsx-no-lambda
        render={() => {
          return (
            <Form>
              <Field
                name="login"
                render={({field, form}: any) => {
                   return (
                    <div>
                      <div className="error-bar" />
                      <LoginInput
                        id={field.name}
                        type="text"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={'Ваш логин'}
                      />
                      {form.errors[field.name] && <ErrorHint error={form.errors[field.name]}/>}
                    </div>
                )}}
              />
              <Field
                name="password"
                render={({field, form}: any) => {
                   return (
                    <div>
                      <div className="error-bar" />
                      <LoginInput
                        id={field.name}
                        type="password"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={'Пароль'}
                      />
                      {form.errors[field.name] && <ErrorHint error={form.errors[field.name]}/>}
                    </div>
                )}}
              />
              <LoginFooter>
                <SubmitButton
                  type="submit"
                  value="Войти"
                  className="btn btn--primary"
                />
              </LoginFooter>
              
            </Form>
          )
        }}
      />
      </Login>
    </LoginWrapper>
  )
  
};

export default withRouter(LoginPage);
