/* eslint-disable react/prop-types */
import React from 'react';
import * as Styled from './styled';


export default function Button(props) {
  return (
    <Styled.ViewButton>
      <Styled.Buttons
        disabled={props?.disabled}
        onPress={props.onPress}
        background={props?.background}
        border={props?.border}
        whidth={props?.whidth}
        >
        <Styled.Text color={props.color}>{props.name}</Styled.Text>
      </Styled.Buttons>
    </Styled.ViewButton>
  );
}
