import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: max-content;

  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
`
export const TaskListContainer = styled.div`
  height: calc(100vh - 4.5rem);
  display: grid;
  /* flex-direction: column; */
  /* align-items: center; */
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  padding: 0.5rem 1rem;
`
export const InfoContainer = styled.div`
  width: 100%;

  /* max-width: 736px; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-right: 1rem;
  /* margin-bottom: 1.5rem; */
`
export const CreatedCentent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 0.875rem;
  font-weight: 700;
  font-family: Inter;
  color: ${(props) => props.theme['gray-100']};
`
export const DoneContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 0.875rem;
  font-weight: 700;
  font-family: Inter;
  color: ${(props) => props.theme['gray-100']};
`
export const Counter = styled.div`
  width: max-content;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;

  border-radius: 999px;
  background-color: ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme['gray-400']};

  font-size: 0.75rem;
  font-weight: 700;
  font-family: Inter;
`
export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  /* min-width: 736px; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  margin-top: 0.8rem;
`
export const EmptyContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  position: absolute;
  top: 40%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  text-align: center;

  color: ${(props) => props.theme['gray-200']};

  img {
    height: 56px;
  }
`
export const TaskListNewTask = styled.div`
  padding: 0 0.8rem;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 8px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['gray-200']};
    border-radius: 6px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['gray-300']};
  }
`
export const TaskListCompleted = styled.div`
  padding: 0 0.8rem;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 8px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['gray-200']};
    border-radius: 6px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['gray-300']};
  }
`
