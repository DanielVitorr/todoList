import { createGlobalStyle } from 'styled-components'

import lousaNegra from '../assets/background-lousa-negra.jpg'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${lousaNegra}) no-repeat center;
    background-size: cover;
    color: ${(props) => props.theme.white};
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
