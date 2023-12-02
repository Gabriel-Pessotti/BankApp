import styled from 'styled-components/native';

export const ViewTop = styled.View`
width: 100%;
height: 50px;
align-items: center;
justify-content: center;
flex-direction: row;
margin-top: 30px;
`;
export const ButtonIcon = styled.TouchableOpacity`
width: 48px;
height: 48px;
position: absolute;
justify-content: center;
background-color: ${({theme}) => theme.Colors.whiteWeak};
border-radius: 28px;
align-items: center;
left: 10px;
`;

export const Text = styled.Text`
color: ${({theme}) => theme.Colors.black};
font-size: 18px;
font-weight: 600;
line-height: 22.5px;
`;


