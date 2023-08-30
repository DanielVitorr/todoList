import { Check, Trash } from 'phosphor-react'
import {
  TaskContainer,
  CheckCircleContainer,
  CircleContainer,
  TaskTextContainer,
} from './styles'

import { useContext } from 'react'
import { TaskContext } from '../../../context/TaskContext'

export function Task() {
  const { tasks, deleteTask, markTaskAsCompleted, markTaskAsIncompleted } =
    useContext(TaskContext)

  return tasks.map((task) => {
    return (
      <TaskContainer key={task.id}>
        {task.isCompleted === false ? (
          <CircleContainer onClick={() => markTaskAsCompleted(task.id)}>
            <Check weight="bold" />
          </CircleContainer>
        ) : (
          <CheckCircleContainer onClick={() => markTaskAsIncompleted(task.id)}>
            <Check weight="bold" />
          </CheckCircleContainer>
        )}

        <TaskTextContainer isCompleted={task.isCompleted}>
          {task.task}
        </TaskTextContainer>

        <button onClick={() => deleteTask(task.id)}>
          <Trash size={17.45} weight="bold" />
        </button>
      </TaskContainer>
    )
  })
}
