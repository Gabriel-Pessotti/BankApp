import React, {useEffect, useState} from 'react';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import * as yup from 'yup';

import {Input} from '../../Components/Inputs';
import Button from '../../Components/Button';
import auth from '@react-native-firebase/auth';

import * as Styled from './styled';
import Top from '../../Components/Top';
import Google from '../../Assets/svg/google';
import Facebook from '../../Assets/svg/facebook';

const schema = yup.object().shape({
  identifier: yup.string().email().required('Informe Seu Email'),
  password: yup
    .string()
    .required('Inform your password')
    .min(5, '* Password must contain at least 5 digits'),
});

export default function Login() {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  useEffect(() =>
  {
  const subscriber=auth().onAuthStateChanged(
    async avatar => {
      if (avatar){navigation.navigate("Home")}
    }
  )
  return subscriber
},[]
  )

  const {
    control,
    watch,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  
  const email= watch('identifier')
  const password= watch('password')
  
  const onSubmit = async input => {
auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
    navigation.navigate("Home")
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  };

  const [senhaa, setSenha] = useState(true);

  return (
    <Styled.Container>
      <Styled.Header>
        <Top text="Sign In" />
      </Styled.Header>
      <Styled.Texts>
        <Styled.Title>Hi, Welcome Back! 👋</Styled.Title>
        <Styled.SubTitle>
          Lorem ipsum dolor sit amet, consectetur
        </Styled.SubTitle>
      </Styled.Texts>
      <Styled.Inputs>
        <Styled.ViewInput>
          <Input
            title="Email Address"
            placeholder="Email"
            colorPlaceholder="#000"
            name="identifier"
            control={control}
            errors={errors}
          />
        </Styled.ViewInput>
        <Styled.ViewSenha>
          <Input
            title="Password"
            placeholder="Password"
            colorPlaceholder="#000"
            name="password"
            control={control}
            errors={errors}
            secureTextEntry={senhaa}
          />
          <Styled.ButtonIcon onPress={() => setSenha(!senhaa)}>
            <Ionicons name="eye" size={24} color="black" />
          </Styled.ButtonIcon>
        </Styled.ViewSenha>
        <Styled.CheckboxContainer>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Styled.TextCheckBox>Remember Me</Styled.TextCheckBox>
          <Styled.Forgot onPress={() => navigation.navigate('Register')}>
            <Styled.TextForgot>Forgot Password</Styled.TextForgot>
          </Styled.Forgot>
        </Styled.CheckboxContainer>
      </Styled.Inputs>
      <Styled.ViewButton>
        <Button
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
          name="Get Started"
          background={isValid ? '#4F3D56' : '#E5E4E3'}
        />
        <Styled.ViewFooterr>
          <Styled.TextAccount>Don’t have an account?</Styled.TextAccount>
          <Styled.ButtonLogin onPress={() => navigation.navigate('Register')}>
            <Styled.TextLogin>Sign Up</Styled.TextLogin>
          </Styled.ButtonLogin>
        </Styled.ViewFooterr>
      </Styled.ViewButton>
      <Styled.Icons>
        <Styled.IconButton>
          <Google />
        </Styled.IconButton>
        <Styled.IconButton>
          <Facebook />
        </Styled.IconButton>
      </Styled.Icons>
    </Styled.Container>
  );
}
