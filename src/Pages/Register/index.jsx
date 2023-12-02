import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';

import Button from '../../Components/Button';
import {Input} from '../../Components/Inputs';
import Top from '../../Components/Top';
import Google from '../../Assets/svg/google';
import Facebook from '../../Assets/svg/facebook';

import * as Styled from './styled';

const schema = yup.object().shape({
  fullName: yup.string().required('Informe seu nome completo'),
  identifier: yup.string().email().required('Informe Seu Email'),
  password: yup
    .string()
    .required('Inform your password')
    .min(5, '* Password must contain at least 5 digits'),
});

export default function Register() {
  const navigation = useNavigation();

  GoogleSignin.configure({
    webClientId:
      '303558338488-8p97q2ol1q9015mb48uuqu84j9sd6fld.apps.googleusercontent.com',
  });

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async avatar => {
      if (avatar) {
        navigation.navigate('Home');
      }
    });
    return subscriber;
  }, []);

  const {
    control,
    watch,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      fullName: '',
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const email = watch('identifier');
  const password = watch('password');
  const fullName = watch('fullName');

  const sendAll = async => {
    onSubmit();
  };

  const onSubmit = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Loading',{fullName:fullName});
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

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log(googleCredential);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  const [senhaa, setSenha] = useState(true);

  return (
    <Styled.Container>
      <Styled.Header>
        <Top text="Sign In" onPress={() => navigation.goBack('')} />
      </Styled.Header>
      <Styled.Texts>
        <Styled.Title>Create Account</Styled.Title>
        <Styled.SubTitle>
          Lorem ipsum dolor sit amet, consectetur
        </Styled.SubTitle>
      </Styled.Texts>
      <Styled.Inputs>
        <Styled.ViewInput>
          <Input
            title="Full Name"
            placeholder="Enter your name"
            colorPlaceholder="#000"
            name="fullName"
            control={control}
            errors={errors}
          />
        </Styled.ViewInput>
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
      </Styled.Inputs>
      <Styled.ViewButton>
        <Button
          disabled={!isValid}
          onPress={handleSubmit(sendAll)}
          name="Create An Account"
          background={isValid ? '#4F3D56' : '#E5E4E3'}
        />
      </Styled.ViewButton>
      <Styled.ViewFooterr>
        <Styled.ViewOr>
          <Styled.TextOr>Or Sign Up with</Styled.TextOr>
        </Styled.ViewOr>
        <Styled.Icons>
          <Styled.IconButton onPress={() => onGoogleButtonPress()}>
            <Google />
          </Styled.IconButton>
          <Styled.IconButton>
            <Facebook />
          </Styled.IconButton>
        </Styled.Icons>
      </Styled.ViewFooterr>
      <Styled.Terms>
        <Styled.TextTerms>
          By signing up you agree to our Terms and Conditions of Use
        </Styled.TextTerms>
      </Styled.Terms>
    </Styled.Container>
  );
}
