import { styled } from 'styled-components'

export const NewTaskFormContainer = styled.div`
  width: 100%;
  max-width: 736px;
  height: max-content;

  display: flex;
  flex-direction: column;
  gap: 53px;

  img {
    height: 2.5rem;
  }

  form {
    width: 100%;

    display: flex;
    gap: 8px;

    input {
      width: 100%;
      padding: 1rem;

      border-radius: 8px;
      border: 1px solid ${(props) => props.theme['gray-700']};
      background-color: ${(props) => props.theme.white};
      color: ${(props) => props.theme['gray-700']};

      &:focus {
        outline: none;
      }
    }

    button {
      padding: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      border-radius: 8px;
      border: 0;

      background-color: ${(props) => props.theme['blue-dark']};
      color: ${(props) => props.theme.white};

      font-size: 14px;
      font-weight: 700;
      font-family: Inter;
      line-height: 1.225rem;

      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.blue};
      }
    }
  }
`
