import styled from 'styled-components/native';

export const Logo = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;
export const Text = styled.Text`
  color: ${({theme}) => theme.Colors.grayWak};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.08px;
  margin-top: 30px;
`;
export const Button = styled.View`
  width: 100%;
  align-items: center;
`;
export const ButtonConfirm = styled.View`
  width: 80%;
`;
