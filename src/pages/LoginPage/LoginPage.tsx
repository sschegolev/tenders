import {
  Field,
  Form,
  Formik,
  FormikProps
} from 'formik';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Logo from 'src/components/Logo';
import * as Yup from 'yup';
import {ErrorHint} from '../../components/ErrorHint/ErrorHint';
import { Login, LoginEnter, LoginFooter, LoginInput, LoginWrapper, SubmitButton } from './styles';

const requiredErrorMessage = (fieldName: string) =>
    `Поле ${fieldName} не должно быть пустым`;

interface ILogin {
  email: string;
  password: string;
}

const LoginPage = ({
  history
}: RouteComponentProps) => {

  return (
    <LoginWrapper>
      <Login>
        <Logo />
        <LoginEnter>
          Вход
        </LoginEnter>
        <Formik 
        // tslint:disable:no-console
        // tslint:disable-next-line:jsx-no-lambda
        onSubmit={() => console.log('submit')}
        initialValues={{password: '', email: ''}}
        validationSchema={
          Yup.object().shape({
            password: Yup.string()
              .trim()
              .required(requiredErrorMessage('Password')),
            email: Yup.string()
            .trim()
            .email('Введите корректный адрес электронной почты')
            .required(requiredErrorMessage('Email'))
          })
        }
        // tslint:disable-next-line:jsx-no-lambda
        render={(formikBag: FormikProps<ILogin>) => {
          console.log(formikBag);
          return (
            <Form>
              <Field
                name="email"
                render={({field, form}: any) => {
                   return (
                    <div>
                      <div className="error-bar" />
                      <LoginInput
                        id={field.name}
                        type="text"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={'Ваш email'}
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