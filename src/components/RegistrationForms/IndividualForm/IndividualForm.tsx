import {Field, Form, Formik, FormikProps} from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import {ErrorHint} from '../../ErrorHint/ErrorHint';
import {
  ButtonContainer,
  CancelButton,
  CredentialsContainer,
  Input,
  InputContainer,
  Label,
  NameContainer,
  PasswordContainer,
  PhoneContainer,
  PhoneInputContainer,
  SiteAgreementContainer,
  SiteAgreementInput,
  SmallInputContainer,
  SubmitButton
} from '../styles';

import '../style.css';

interface IIndividualForm {
  login: string;
  email: string;
  name: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreementCheckbox: boolean;
}

interface IndividualFormProps {
  onCancel: () => void;
}

export class IndividualForm extends React.Component<IndividualFormProps> {
  render() {
    return (
      <div>
        <Formik
          // tslint:disable:no-console
          // tslint:disable-next-line:jsx-no-lambda
          onSubmit={() => console.log('submit')}
          initialValues={{
            password: '',
            confirmPassword: '',
            email: '',
            login: '',
            name: '',
            phone: '',
            agreementCheckbox: false
          }}
          validationSchema={Yup.object().shape({
            password: Yup.string()
              .trim()
              .required('Это поле обязательно.'),
            confirmPassword: Yup.string()
              .trim()
              .required('Это поле обязательно.')
              .oneOf([Yup.ref('password'), null], 'Пароль не совпадает'),
            email: Yup.string()
              .trim()
              .email('Введите корректный адрес электронной почты')
              .required('Это поле обязательно.'),
            login: Yup.string()
              .trim()
              .required('Это поле обязательно.'),
            agreementCheckbox: Yup.boolean().required(
              'Вы должны принять условия сайта'
            )
          })}
          validateOnBlur={false}
          validateOnChange={false}
          // tslint:disable-next-line:jsx-no-lambda
          render={(formikBag: FormikProps<IIndividualForm>) => {
            return (
              <Form>
                <CredentialsContainer>
                  <Field
                    name="login"
                    render={({field, form}: any) => {
                      return (
                        <SmallInputContainer>
                          <div className="error-bar" />
                          <Label htmlFor={field.name}>Логин</Label>
                          <Input
                            id={field.name}
                            type="text"
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Ваш логин"
                          />
                          {form.errors[field.name] && (
                            <ErrorHint error={form.errors[field.name]} />
                          )}
                        </SmallInputContainer>
                      );
                    }}
                  />
                  <Field
                    name="email"
                    render={({field, form}: any) => {
                      return (
                        <SmallInputContainer>
                          <div className="error-bar" />
                          <Label htmlFor={field.name}>E-mail</Label>
                          <Input
                            id={field.name}
                            type="email"
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Ваш email"
                          />
                          {form.errors[field.name] && (
                            <ErrorHint error={form.errors[field.name]} />
                          )}
                        </SmallInputContainer>
                      );
                    }}
                  />
                </CredentialsContainer>
                <NameContainer>
                  <Field
                    name="name"
                    render={({field}: any) => {
                      return (
                        <InputContainer>
                          <div className="error-bar" />
                          <Label htmlFor={field.name}>
                            ФИО ответственного лица
                          </Label>
                          <Input
                            id={field.name}
                            type="text"
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Иванов Иван Иванович"
                          />
                        </InputContainer>
                      );
                    }}
                  />
                </NameContainer>
                <PhoneContainer>
                  <Field
                    name="phone"
                    render={({field}: any) => {
                      return (
                        <PhoneInputContainer>
                          <div className="error-bar" />
                          <Label htmlFor={field.name}>
                            Телефон контактного лица
                          </Label>
                          <Input
                            id={field.name}
                            type="phone"
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="+375 (29) 111-11-11"
                          />
                        </PhoneInputContainer>
                      );
                    }}
                  />
                </PhoneContainer>
                <PasswordContainer>
                  <Field
                    name="password"
                    render={({field, form}: any) => {
                      return (
                        <SmallInputContainer>
                          <div className="error-bar" />
                          <Label htmlFor={field.name}>Пароль</Label>
                          <Input
                            id={field.name}
                            type="password"
                            value={field.value}
                            onChange={field.onChange}
                          />
                          {form.errors[field.name] && (
                            <ErrorHint error={form.errors[field.name]} />
                          )}
                        </SmallInputContainer>
                      );
                    }}
                  />
                  <Field
                    name="confirmPassword"
                    render={({field, form}: any) => {
                      return (
                        <SmallInputContainer>
                          <div className="error-bar" />
                          <Label htmlFor={field.name}>Подтвердите пароль</Label>
                          <Input
                            id={field.name}
                            type="password"
                            value={field.value}
                            onChange={field.onChange}
                          />
                          {form.errors[field.name] && (
                            <ErrorHint error={form.errors[field.name]} />
                          )}
                        </SmallInputContainer>
                      );
                    }}
                  />
                </PasswordContainer>
                <SiteAgreementContainer>
                  <Field
                    name="agreementCheckbox"
                    render={({field, form}: any) => {
                      return (
                        <>
                          <SiteAgreementInput>
                            <input
                              id={field.name}
                              type="checkbox"
                              value={field.value}
                              onChange={field.onChange}
                            />
                            <Label htmlFor={field.name}>
                              Согласен с{' '}
                              <a href="#" target="_blank">
                                условиями сайта
                              </a>
                            </Label>
                          </SiteAgreementInput>
                          {form.errors[field.name] && (
                            <ErrorHint error={form.errors[field.name]} />
                          )}
                        </>
                      );
                    }}
                  />
                </SiteAgreementContainer>
                <ButtonContainer>
                  <CancelButton type="button" onClick={this.props.onCancel}>
                    Отмена
                  </CancelButton>
                  <SubmitButton type="submit">Создать</SubmitButton>
                </ButtonContainer>
              </Form>
            );
          }}
        />
      </div>
    );
  }
}
