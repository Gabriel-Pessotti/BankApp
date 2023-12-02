import styled from 'styled-components/native';

export const ViewButton = styled.View``;

export const Buttons = styled.TouchableOpacity`
  background-color: ${props => props.background || 'transparent'};
  border-color: #e3e9ed;
  border-width: 2px;
  width: 156px;
  height: 140px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.Text`
  color: #1f2c37;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.08px;
`;
export const Subtitle = styled.Text`
color: #9CA4AB;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.06px;
`;

