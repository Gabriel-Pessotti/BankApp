/* eslint-disable react/prop-types */
import React from 'react';

import * as Styled from './styled';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ItensProfile(props) {


  return (
    <Styled.View>
      <Styled.ViewIcon >
      <Styled.ButtonIcon onPress={props.onPress}>
         <Ionicons
                name={props.name}
                size={props.size}
                color={props.color}
              />
        </Styled.ButtonIcon>
        <Styled.Text>{props.text}</Styled.Text>
      </Styled.ViewIcon>
      <Ionicons
                name={props.nameR}
                size={props.sizeR}
                color={props.colorR}
        />
    </Styled.View>
  );
}