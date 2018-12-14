import styled from 'styled-components';

export const LoginWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginEnter = styled.div`
  margin-top: 55px;
  font-size: 19px;
  color: #777;
  margin-bottom: 10px;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
`;

export const LoginInput = styled.input`
  border: 1px solid #e0e0e0;
  margin-top: 6px;
  margin-bottom: 3px;
  height: 32px;
  padding-left: 16px;
  border-radius: 3px;
  width: 100%;

  ::placeholder {
    font-style: italic;
    color: #e3e3e3;
  }
`;

export const LoginFooter = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const SubmitButton = styled.input`
  width: 75px;
  height: 36px;
  margin-left: 2px;
  margin-right: 32px;
  border: none;
  background: #1581ed;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 3px;
  letter-spacing: .2px;

  &: hover {
    cursor: pointer;
  }
`;