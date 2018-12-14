import {Field, Form, Formik, FormikProps} from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import {ErrorHint} from '../../ErrorHint/ErrorHint';
import {
  BankDataInputContainer,
  ButtonContainer,
  CancelButton,
  CompanyNameContainer,
  CredentialsContainer,
  FlexSpaceBetweenContainer,
  Input,
  Label,
  PasswordContainer,
  PhoneContainer,
  PhoneInputContainer,
  SiteAgreementContainer,
  SiteAgreementInput,
  SmallInputContainer,
  SubmitButton,
  TextArea,
  TrnContainer
} from '../styles';

import '../style.css';

interface ILegalForm {
  login: string;
  email: string;
  companyName: string;
  trn: string;
  companySite: string;
  legalAddress: string;
  postAddress: string;
  directorName: string;
  directorApprovedBy: string;
  responsiblePersonName: string;
  responsiblePersonPosition: string;
  bankData: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreementCheckbox: boolean;
}

interface LegalFormProps {
  onCancel: () => void;
}

export class LegalForm extends React.Component<LegalFormProps> {
  render() {
    return (
      <div>
        <Formik
          // tslint:disable:no-console
          // tslint:disable-next-line:jsx-no-lambda
          onSubmit={() => console.log('submit')}
          initialValues={{
            login: '',
            email: '',
            companyName: '',
            trn: '',
            companySite: '',
            legalAddress: '',
            postAddress: '',
            directorName: '',
            directorApprovedBy: '',
            responsiblePersonName: '',
            responsiblePersonPosition: '',
            bankData: '',
            phone: '',
            password: '',
            confirmPassword: '',
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
          render={(formikBag: FormikProps<ILegalForm>) => {
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
                <FlexSpaceBetweenContainer>
                  <Field
                    name="Наименование компании"
                    render={({field}: any) => {
                      return (
                        <CompanyNameContainer>
                          <Label htmlFor={field.name}>
                            ФИО ответственного лица
                          </Label>
                          <Input
                            id={field.name}
                            type="text"
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="ЗАО Рога и Копыта"
                          />
                        </CompanyNameContainer>
                      );
                    }}
                  />
                  <Field
                    name="УНП"
                    render={({field}: any) => {
                      return (
                        <TrnContainer>
                          <Label htmlFor={field.name}>УНП</Label>
                          <Input
                            id={field.name}
                            type="text"
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </TrnContainer>
                      );
                    }}
                  />
                </FlexSpaceBetweenContainer>
                <FlexSpaceBetweenContainer>
                  <Field
                    name="companySite"
                    render={({field}: any) => {
                      return (
                        <SmallInputContainer>
                          <Label htmlFor={field.name}>Сайт компании</Label>
                          <Input
                            id={field.name}
                            type="text"
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="domain.com"
                          />
                        </SmallInputContainer>
                      );
                    }}
                  />
                </FlexSpaceBetweenContainer>
                <FlexSpaceBetweenContainer>
                  <Field
                    name="legalAddress"
                    render={({field}: any) => {
                      return (
                        <SmallInputContainer>
                          <Label htmlFor={field.name}>Юридический адрес</Label>
                          <TextArea
                            id={field.name}
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </SmallInputContainer>
                      );
                    }}
                  />
                  <Field
                    name="postAddress"
                    render={({field}: any) => {
                      return (
                        <SmallInputContainer>
                          <Label htmlFor={field.name}>Почтовый адрес</Label>
                          <TextArea
                            id={field.name}
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </SmallInputContainer>
                      );
                    }}
                  />
                </FlexSpaceBetweenContainer>
                <FlexSpaceBetweenContainer>
                  <Field
                    name="directorName"
                    render={({field}: any) => {
                      return (
                        <SmallInputContainer>
                          <Label htmlFor={field.name}>ФИО директора</Label>
                          <Input
                            type="text"
                            id={field.name}
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </SmallInputContainer>
                      );
                    }}
                  />
                  <Field
                    name="directorApprovedBy"
                    render={({field}: any) => {
                      return (
                        <SmallInputContainer>
                          <Label htmlFor={field.name}>
                            На основании чего действует
                          </Label>
                          <Input
                            type="text"
                            id={field.name}
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </SmallInputContainer>
                      );
                    }}
                  />
                </FlexSpaceBetweenContainer>
                <FlexSpaceBetweenContainer>
                  <Field
                    name="responsiblePersonName"
                    render={({field}: any) => {
                      return (
                        <SmallInputContainer>
                          <Label htmlFor={field.name}>
                            ФИО ответственного лица
                          </Label>
                          <Input
                            type="text"
                            id={field.name}
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </SmallInputContainer>
                      );
                    }}
                  />
                  <Field
                    name="responsiblePersonPosition"
                    render={({field}: any) => {
                      return (
                        <SmallInputContainer>
                          <Label htmlFor={field.name}>
                            Должность ответственного лица
                          </Label>
                          <Input
                            type="text"
                            id={field.name}
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </SmallInputContainer>
                      );
                    }}
                  />
                </FlexSpaceBetweenContainer>
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
                <FlexSpaceBetweenContainer>
                  <Field
                    name="bankData"
                    render={({field}: any) => {
                      return (
                        <BankDataInputContainer>
                          <Label htmlFor={field.name}>
                            Банковские реквизиты
                          </Label>
                          <TextArea
                            id={field.name}
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </BankDataInputContainer>
                      );
                    }}
                  />
                </FlexSpaceBetweenContainer>
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
