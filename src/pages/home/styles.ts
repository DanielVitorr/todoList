import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1rem;
  position: relative;
  top: -27px;
`
export const InfoContainer = styled.div`
  width: 100%;
  max-width: 736px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 4rem;
  margin-bottom: 1.5rem;
`
export const CreatedCentent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 0.875rem;
  font-weight: 700;
  font-family: Inter;
  color: ${(props) => props.theme['green-dark']};
`
export const DoneContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 0.875rem;
  font-weight: 700;
  font-family: Inter;
  color: ${(props) => props.theme.blue};
`
export const Counter = styled.div`
  width: max-content;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;

  border-radius: 999px;
  background-color: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-200']};

  font-size: 0.75rem;
  font-weight: 700;
  font-family: Inter;
`
export const ListContainer = styled.div`
  width: 100%;
  max-width: 736px;
  padding: 4rem 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
`
export const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  color: ${(props) => props.theme['gray-300']};

  img {
    height: 56px;
  }
`
