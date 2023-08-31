import { Header } from '../../components/Header'
import { NewTaskForm } from './NewTaskForm'
import {
  Counter,
  CreatedCentent,
  DoneContent,
  EmptyContent,
  HomeContainer,
  InfoContainer,
  ListContainer,
  TaskListContainer,
} from './styles'

import Clipboard from '../../assets/clipboard.svg'
import { Task } from './Task'
import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'

export function Home() {
  const { tasks } = useContext(TaskContext)

  const totalTaskCount = tasks.length
  const totalCountOfCompletedTasks = tasks.filter(
    (task) => task.isCompleted === true,
  )

  console.log(tasks)

  return (
    <HomeContainer>
      <Header />

      <TaskListContainer>
        <NewTaskForm />

        <InfoContainer>
          <CreatedCentent>
            <p>Tarefas criadas</p>
            <Counter>{totalTaskCount}</Counter>
          </CreatedCentent>
          <DoneContent>
            <p>Concluídas</p>
            <Counter>{`${totalCountOfCompletedTasks.length} de ${totalTaskCount}`}</Counter>
          </DoneContent>
        </InfoContainer>

        {tasks.map((task) => task.id).length === 0 ? (
          <ListContainer>
            <EmptyContent>
              <img src={Clipboard} alt="" />

              <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </EmptyContent>
          </ListContainer>
        ) : (
          <Task />
        )}
      </TaskListContainer>
    </HomeContainer>
  )
}
