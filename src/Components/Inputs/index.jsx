/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import NumberFormat from 'react-number-format';

import {Controller} from 'react-hook-form';
import * as Styled from './styled';

export function Input({
  title,
  name,
  errors,
  inputRef,
  control,
  onSubmitEditing,
  placeholder,
  secureTextEntry,
  colorPlaceholder,
  heigth,
  mask,
}) {
  const [hasContent, setHasContent] = useState(false);
  const hasError = errors[name] && errors[name].message;

  return (
    <Styled.View>
      <Styled.Title>{title}</Styled.Title>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <Styled.TextInput
              onBlur={onBlur}
              onChangeText={text => {
                const maskedText = mask ? mask(text) : text;

                onChange(maskedText);
                setHasContent(!!text);
              }}
              value={value}
              heigth={heigth}
              ref={inputRef}
              onSubmitEditing={onSubmitEditing}
              placeholder={placeholder}
              placeholderTextColor={colorPlaceholder}
              secureTextEntry={secureTextEntry || false}
              style={{
                borderColor: hasError ? 'red' : hasContent ? '#2bb735' : '#ccc',
              }}
            />
            {errors[name] && errors[name].message && (
              <Styled.TextError>{errors[name].message}</Styled.TextError>
            )}
          </>
        )}
      />
    </Styled.View>
  );
}
