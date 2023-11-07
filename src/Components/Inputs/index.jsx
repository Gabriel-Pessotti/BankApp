/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Controller } from 'react-hook-form';
import * as Styled from './styled';

export function Input ({title, name, errors, inputRef, control, onSubmitEditing, placeholder, secureTextEntry, colorPlaceholder}) {
  const [hasContent, setHasContent] = useState(false);

  return (
    <Styled.View>
       <Styled.Title>{title}</Styled.Title>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Styled.TextInput
            onBlur={onBlur}
            onChangeText={(text) => {
              onChange(text);
              setHasContent(!!text); // Set hasContent to true if text is not empty
            }}
            value={value}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            placeholderTextColor={colorPlaceholder}
            secureTextEntry={secureTextEntry || false}
            style={hasContent ? { borderColor: '#2bb735' } : { borderColor: '#ccc' }} // Apply conditional border color
          />
        )}
      />
      {errors[name] && <Styled.TextError>{errors[name].message}</Styled.TextError>}
    </Styled.View>
  )
}
