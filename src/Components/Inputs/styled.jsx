import styled from 'styled-components/native'

export const View = styled.View`
  width: 100%;
`
export const Title = styled.Text`
color: ${({theme}) => theme.Colors.blackLight};
font-size: 14px;
font-weight: 600;
line-height: 22px; 
letter-spacing: 0.07px;
`
export const TextInput = styled.TextInput`
  border-width: 1px;
  border-color: ${({theme}) => theme.Colors.whiteLigth};
  text-align: left;
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};;
  border-radius: 16px;
  height: ${props => (props.heigth ? props.heigth : '60px')};
  background-color: ${({theme}) => theme.Colors.white};
  border-width: 3px;
  padding-left: 10px;
  color: ${({theme}) => theme.Colors.black};
  
`;

export const TextError = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.Colors.red};
  font-weight: bold;

`