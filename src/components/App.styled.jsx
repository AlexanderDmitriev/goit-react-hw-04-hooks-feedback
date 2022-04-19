//import styled from 'styled-components';
import styled from '@emotion/styled';

export const Title = styled.h2`
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: ${props => props.theme.spacing(5)};
  line-height: 1.2;
  text-align: center;
  color: ${props => props.theme.colors.textColor};
  padding-top: ${props => props.theme.spacing(2)};
`;

export const Container = styled.div`
  box-sizing: content-box;
  box-shadow: 5px 5px 4px 1px rgb(0 0 0 / 30%);
  width: ${props => props.theme.spacing(120)};
  margin: 0 auto;
  margin-top: ${props => props.theme.spacing(5)};
  padding: ${props => props.theme.spacing(3)};
`;

export const ContentList = styled.li`
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.textColor};
  padding-top: ${props => props.theme.spacing(1)};
  ::first-letter {
    text-transform: uppercase;
  }
`;

export const StatisticSection = styled.ul`
  list-style: none;
  padding-top: ${props => props.theme.spacing(2)};
`;

export const ButtonSection = styled.ul`
  list-style: none;
  padding-top: ${props => props.theme.spacing(2)};
  display: flex;
  justify-content: center;
`;
