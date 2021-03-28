import React from 'react';
import { IconButtonContainer } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

export const IconButton = ({ transparent, iconNome }) => {
  return (
    <IconButtonContainer transparent={transparent}>
      <Icon name={iconNome} color="white" size={20}/>
    </IconButtonContainer>
  );
};
