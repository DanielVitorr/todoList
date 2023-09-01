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
  TaskListNewTask,
  TaskListCompleted,
} from './styles'

import Clipboard from '../../assets/clipboard.svg'
import { Task } from './Task'
import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
// import { useDrop } from 'react-dnd'

export function Home() {
  const { tasks } = useContext(TaskContext)

  const totalTaskCount = tasks.length
  const totalCountOfCompletedTasks = tasks.filter(
    (task) => task.isCompleted === true,
  )

  const tasksFilteredTrue = tasks.filter(function (task) {
    return task.isCompleted === true
  })

  const tasksFilteredFalse = tasks.filter(function (task) {
    return task.isCompleted === false
  })

  return (
    <HomeContainer>
      <header>
        <Header />
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
      </header>

      <TaskListContainer>
        <TaskListNewTask>
          <h1>Tarefas Novas/Pendentes</h1>

          {tasks.map((task) => task.id).length === 0 && (
            <ListContainer>
              <EmptyContent>
                <img src={Clipboard} alt="" />

                <div>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </EmptyContent>
            </ListContainer>
          )}

          {tasksFilteredFalse.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              content={task.task}
              isCompleted={task.isCompleted}
            />
          ))}
        </TaskListNewTask>
        <TaskListCompleted>
          <h1>Concluídas</h1>

          {tasksFilteredTrue.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              content={task.task}
              isCompleted={task.isCompleted}
            />
          ))}
        </TaskListCompleted>
      </TaskListContainer>
    </HomeContainer>
  )
}
