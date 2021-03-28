import React from 'react';
import { ScreenContainer, TopContanier, TitleContainer } from './styles';
import { Title, IconButton, Input } from '../../components';

export const HomeScreen = () => {
  return (
    <ScreenContainer>
      <TopContanier>
        <TitleContainer>
          <Title>Encontre aqui seu imóvel</Title>
        </TitleContainer>
        <IconButton iconNome="filter"/>
      </TopContanier>
      <Input label="Localização" placeholder="Digite o endereço" />
    </ScreenContainer>
  );
};
