import styled, { css } from 'styled-components'

interface TaskTextContainerProps {
  isCompleted: boolean
}

export const TaskContainer = styled.div`
  width: 100%;
  /* max-width: 300px; */

  display: flex;
  justify-content: space-between;
  gap: 12px;

  padding: 1rem;
  margin-bottom: 0.8rem;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-200']};

  background-color: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-700']};

  button {
    width: 24px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme['white-200']};
    border: 0;
    border-radius: 4px;

    line-height: 0;

    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.danger};
      color: ${(props) => props.theme['white-100']};
    }
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 1px dashed ${props.theme['gray-200']};
      border-radius: 4px;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      span,
      p,
      button {
        opacity: 0;
      }
    `}
`
export const CheckCircleContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.5rem;
  height: 1.3rem;

  border: 2px solid ${(props) => props.theme.green};
  border-radius: 50%;

  cursor: pointer;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-dark']};

  font-size: 0.8rem;

  &:hover {
    background-color: ${(props) => props.theme.green};
    border: 2px solid ${(props) => props.theme['green-dark']};
  }
`
export const CircleContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;

  width: 1.5rem;
  height: 1.3rem;

  padding: 0.15rem;

  border: 2px solid ${(props) => props.theme.blue};
  border-radius: 50%;

  cursor: pointer;
  color: ${(props) => props.theme.blue};

  font-size: 0.8rem;

  svg {
    display: none;
  }

  &:hover {
    svg {
      display: block;
    }
  }
`
export const TaskTextContainer = styled.p<TaskTextContainerProps>`
  width: 100%;
  font-family: Inter;

  color: ${(props) =>
    props.isCompleted ? props.theme['gray-300'] : props.theme['gray-700']};
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'auto')};
`
