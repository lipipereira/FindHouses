import styled from 'styled-components/native';

export const IconButtonContainer = styled.TouchableOpacity`
  height: ${({ theme }) => theme.metrics.px(48)}px;
  width: ${({ theme }) => theme.metrics.px(48)}px;
  background-color: ${({ theme, transparent }) => // Se é transparente colcoar essa cor se não essa outra( Condição ternaria )
    transparent
      ? theme.colors.purpleTransparent
      : theme.colors.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.metrics.px(6)}px;
`;
