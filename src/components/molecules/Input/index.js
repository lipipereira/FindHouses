import React from 'react';
import { Inputlabel } from '../../atoms';
import { InputText, InputContainer } from './styles';

export const Input = ({ label, placeholder }) => {
  return (
    <InputContainer>
      <Inputlabel>{label}</Inputlabel>
      <InputText placeholder={placeholder} placeholderTextColor="white" />
    </InputContainer>
  );
};
