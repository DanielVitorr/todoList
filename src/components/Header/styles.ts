import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 150px;

  background-color: ${(props) => props.theme['white-200']};

  display: flex;
  justify-content: center;
`
export const HomeContent = styled.div`
  width: 736px;
  height: max-content;

  position: relative;
  top: 40px;

  display: flex;
  flex-direction: column;
  gap: 53px;

  img {
    height: 2.5rem;
  }
`
