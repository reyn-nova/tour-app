import React from 'react';
import {TextInput} from 'react-native';

import {useController} from 'react-hook-form';

function Input({
  autoCorrect,
  autoComplete,
  name,
  control,
  placeholder,
  testID,
  style,
  placeholderTextColor,
  secureTextEntry,
  required,
}) {
  const {field} = useController({
    name,
    control,
    defaultValue: '',
    rules: {
      required,
    },
  });

  return (
    <TextInput
      autoCorrect={autoCorrect}
      autoComplete={autoComplete}
      testID={testID}
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      style={style}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
    />
  );
}

export default Input;
