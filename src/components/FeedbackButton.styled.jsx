import styled from 'styled-components';
import {theme} from './theme';

export const CustomButton =  styled.button`
    font-weight: 700;
    font-size: ${theme.spacing(3)};
    line-height: 1.9;
    color: ${theme.colors.white};
    letter-spacing: 0.06em;
    background-color: ${theme.colors.buttonColor};
    cursor: pointer;
    border-radius: ${theme.spacing(1)};
    padding: ${theme.spacing(2)} ${theme.spacing(6)};
    min-width: ${theme.spacing(30)};
    text-align: center;
    margin: 0 ${theme.spacing(2)};
`;