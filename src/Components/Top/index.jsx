/* eslint-disable react/prop-types */
import React from "react";
import * as Styled from './styled';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Top(props) {
  return (
    <Styled.ViewTop>
        <Styled.ButtonIcon onPress={props.onPress}>
         <Ionicons
                name="chevron-back-sharp"
                size={24}
                color={"black"}
              />
        </Styled.ButtonIcon>
        <Styled.Text>{props.text}</Styled.Text>
    </Styled.ViewTop>
  );
}

