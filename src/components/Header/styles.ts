import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: max-content;
  height: max-content;

  /* background-color: ${(props) => props.theme['white-200']}; */

  display: flex;
  justify-content: start;

  padding: 0.8rem 1rem;

  img {
    height: 2.5rem;

    -webkit-filter: drop-shadow(0px 0px 17px #ffffff);
    filter: drop-shadow(0px 0px 13px #ffffff);
  }
`
