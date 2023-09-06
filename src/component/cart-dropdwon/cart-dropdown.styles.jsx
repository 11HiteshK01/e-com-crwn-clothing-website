import styled from 'styled-components';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
} from '../Button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin: auto;
  }
`;

export const CartItems = styled.div`
  height: 380px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

