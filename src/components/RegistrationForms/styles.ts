import styled from 'styled-components';

export const FlexSpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CredentialsContainer = styled(FlexSpaceBetweenContainer)`
`;

export const NameContainer = styled.div`
  margin-top: 12px;
`;

export const PhoneContainer = styled.div`
  margin-top: 26px;
  position: relative;
`;

export const PasswordContainer = styled(FlexSpaceBetweenContainer)`
  width: 60%;
`;

export const SiteAgreementContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SiteAgreementInput = styled.div`
  display: flex;
`;

export const Label = styled.label`
  letter-spacing: .6px;
  color: #777;
  padding-top: 1px;
` as any;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallInputContainer = styled(InputContainer)`
  width: 48%;
`;

export const PhoneInputContainer = styled(InputContainer)`
  width: 30%;
`;

export const BankDataInputContainer = styled(InputContainer)`
  width: 70%;
`;

export const CompanyNameContainer = styled(InputContainer)`
  flex-grow: 5;
`;

export const TrnContainer = styled(InputContainer)`
  margin-left: 20px;
  flex-grow: 0;
`;

export const Input = styled.input`
  font-size: 14px;
  color: #333;
  font-family: Roboto,sans-serif;
  border: 1px solid #e0e0e0;
  margin-top: 6px;
  height: 32px;
  padding-left: 16px;
  border-radius: 3px;
  
  &::placeholder {
    color: #ccc;
    font-style: italic;
  }
`;

export const TextArea = styled.textarea`
  font-size: 14px;
  color: #333;
  font-family: Roboto,sans-serif;
  border: 1px solid #e0e0e0;
  margin-top: 6px;
  height: 118px;
  resize: none;
  padding-left: 16px;
  border-radius: 3px;
  
  &::placeholder {
    color: #ccc;
    font-style: italic;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 75px;
  height: 36px;
  border: none;
  color: #fff;
  font-size: 15px;
  border-radius: 3px;
  letter-spacing: .2px;

  &: hover {
    cursor: pointer;
  }
`;

export const SubmitButton = styled(Button)`
  background: #fa9504;
`;

export const CancelButton = styled(Button)`
  background-color: #5f7e9d;
  margin-right: 9px;
`;
