import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.Colors.purpleStrong};
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
`;
export const ContainerSlide = styled.View``;
export const Texts = styled.View`
  margin-top: 40px;
`;
export const Image = styled.Image``;
export const Text = styled.Text`
  color: ${({theme}) => theme.Colors.white};
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.175px;
`;
export const Sub = styled.Text`
  color: ${({theme}) => theme.Colors.grayWak};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.07px;
`;
export const Logo = styled.View`
  width: 370px;
  height: 500px;
`;
export const Primary = styled.View`
  margin-top: 185px;
  margin-left: 90px;
`;
export const Secondary = styled.View`
  margin-top: 90px;
  margin-left: 30px;
`;
export const Terceary = styled.View`
  margin-top: 90px;
  margin-left: 30px;
`;
export const View = styled.View``;
export const ButtonNext = styled.View`
  background-color: transparent;
  height: 100px;
  width: 365px;
  position: absolute;
  right: 0;
  `;
export const TextButton = styled.Text`
  color: ${({theme}) => theme.Colors.white};
`;
