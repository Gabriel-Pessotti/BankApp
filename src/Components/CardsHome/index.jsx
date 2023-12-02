/* eslint-disable react/prop-types */
import React from 'react';
import * as Styled from './styled';
import Send from '../../Assets/svg/send';
import Wallet from '../../Assets/svg/wallet';
import Request from '../../Assets/svg/request';
import Users from '../../Assets/svg/users';

export default function CardsHome(props) {
  const { icon, ...otherProps } = props;
  return (
    <Styled.ViewButton>
      <Styled.Buttons
        onPress={props.onPress}
        background={props?.background}
        whidth={props?.whidth}
        {...otherProps}
      >
        {icon === 'Send' && <Send />}
        {icon === 'Wallet' && <Wallet />}
        {icon === 'Request' && <Request />}
        {icon === 'Users' && <Users />}
        <Styled.Text color={props.color}>{props.name}</Styled.Text>
        <Styled.Subtitle color={props.color}>{props.subtitle}</Styled.Subtitle>
      </Styled.Buttons>
    </Styled.ViewButton>
  );
}