import styled, {keyframes} from 'styled-components';

export const StyledCheckoutBasket = styled.aside`
  width: 35%;
  position: fixed;
  top: 0;
  right: 0;
  padding: 2%;
  background-color: rgba(83, 135, 38, 0.8);
  border-radius: 0 0 0 20px;
  ul{
    padding-left: 4%;
    li{
      list-style: none;
      button{
        margin-left: 10px;
      }
    }
  }
  .animate-enter {
    opacity: 0.01;
  }

  .animate-enter.animate-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }

  .animate-leave {
    opacity: 1;
  }

  .animate-leave.animate-leave-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }
`;

