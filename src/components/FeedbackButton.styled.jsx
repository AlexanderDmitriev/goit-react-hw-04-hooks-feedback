//import styled from 'styled-components';
import styled from '@emotion/styled';

export const CustomButton = styled.button`
  font-weight: 700;
  font-size: ${props => props.theme.spacing(3)};
  line-height: 1.9;
  color: ${props => props.theme.colors.white};
  letter-spacing: 0.06em;
  background-color: ${props => props.theme.colors.buttonColor};
  cursor: pointer;
  border-radius: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(6)};
  min-width: ${props => props.theme.spacing(30)};
  text-align: center;
  margin: 0 ${props => props.theme.spacing(2)};
`;
