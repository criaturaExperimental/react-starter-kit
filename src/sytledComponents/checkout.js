import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
from {
  opacity: .2;
}
to {
  opacity: 1;
}
`;

export const StyledCheckoutBasket = styled.aside`
  width: 30%;
  position: fixed;
  top: 0;
  right: 0;
  padding: 2%;
  background-color: rgba(83, 135, 38, 0.8);
  border-radius: 0 0 0 20px;
  .fadeIn{
    animation: ${fadeIn} .3s linear;
  }
`;

