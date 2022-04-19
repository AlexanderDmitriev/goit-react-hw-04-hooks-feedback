import styled from 'styled-components';
import {theme} from './theme';

export const Title =  styled.h2`
    font-family: Raleway, sans-serif;
    font-weight: 700;
    font-size: ${theme.spacing(5)};
    line-height: 1.2;
    text-align: center;
    color: ${theme.colors.textColor};
    padding-top: ${theme.spacing(2)};
`;

export const Container =  styled.div`
    box-sizing: content-box;
    box-shadow: 5px 5px 4px 1px rgb(0 0 0 / 30%);
    width: ${theme.spacing(120)};
    margin: 0 auto;
    margin-top: ${theme.spacing(5)};
    padding:${theme.spacing(3)};
`;

export const ContentList= styled.li`
    font-family: Raleway, sans-serif;
    font-weight: 500;
    font-size: ${theme.spacing(4)};
    color: ${theme.colors.textColor};
    padding-top: ${theme.spacing(1)};
    ::first-letter{
        text-transform:uppercase;
    }
`;

export const StatisticSection =  styled.ul`
    list-style: none;
    padding-top: ${theme.spacing(2)};
`;

export const ButtonSection =  styled.ul`
    list-style: none;
    padding-top: ${theme.spacing(2)};
    display: flex;
    justify-content: center;
`;