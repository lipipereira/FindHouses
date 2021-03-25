import styled from 'styled-components/native';

export const SectionView = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 100%;
    width: 100%;
    background-color: ${({theme}) => theme.colors.backgroundDark} ;
`;

export const SectionImage = styled.Image`
    height: 150px;
    width: 150px;
    border-radius: 50px;
`;

export const SectionText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;