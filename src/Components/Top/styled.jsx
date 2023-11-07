import styled from 'styled-components/native';

export const ViewTop = styled.View`
width: 100%;
justify-content: center;
flex-direction: row;
`;
export const ButtonIcon = styled.TouchableOpacity`
position: absolute;
align-items: center;
justify-content: center;
left: 10px;
`;

export const Text = styled.Text`
color: ${({theme}) => theme.Colors.black};
font-size: 18px;
font-weight: 600;
line-height: 22.5px;
`;


