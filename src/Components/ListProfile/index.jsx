/* eslint-disable react/prop-types */
import React from 'react';

import * as Styled from './styled';
import IconProfile from '../ItensProfile';

export default function ListProfile() {
  return (
    <>
      <Styled.TextBold>Personal Info</Styled.TextBold>
      <IconProfile
        name="person-outline"
        size={24}
        color="black"
        text="Your Profile"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
      />
      <IconProfile
        name="download-outline"
        size={24}
        color="black"
        text="History Transaction"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
      />
      <Styled.TextBold>Security</Styled.TextBold>
      <IconProfile
        name="scan-outline"
        size={24}
        color="black"
        text="Face Id"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
      />
      <IconProfile
        name="lock-closed-outline"
        size={24}
        color="black"
        text="Change Password"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
      />
      <IconProfile
        name="lock-open-outline"
        size={24}
        color="black"
        text="Forgot Password"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
      />
      <Styled.TextBold>General</Styled.TextBold>
      <IconProfile
        name="notifications-outline"
        size={24}
        color="black"
        text="Notification"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
      />
      <IconProfile
        name="language-outline"
        size={24}
        color="black"
        text="Languages"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
      />
      <IconProfile
        name="information-circle-outline"
        size={24}
        color="black"
        text="Help and Support"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
      />
    
    </>
  );
}
