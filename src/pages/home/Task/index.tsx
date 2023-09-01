import { Check, Trash } from 'phosphor-react'
import {
  TaskContainer,
  CheckCircleContainer,
  CircleContainer,
  TaskTextContainer,
} from './styles'

import { useContext } from 'react'
import { TaskContext } from '../../../context/TaskContext'

interface TaskProps {
  content: string
  id: string
  isCompleted: boolean
}

export function Task({ content, isCompleted, id }: TaskProps) {
  const { deleteTask, markTaskAsCompleted, markTaskAsIncompleted } =
    useContext(TaskContext)

  return (
    <TaskContainer>
      {isCompleted === false ? (
        <CircleContainer onClick={() => markTaskAsCompleted(id)}>
          <Check weight="bold" />
        </CircleContainer>
      ) : (
        <CheckCircleContainer onClick={() => markTaskAsIncompleted(id)}>
          <Check weight="bold" />
        </CheckCircleContainer>
      )}

      <TaskTextContainer isCompleted={isCompleted}>{content}</TaskTextContainer>

      <button onClick={() => deleteTask(id)}>
        <Trash size={17.45} weight="bold" />
      </button>
    </TaskContainer>
  )
}
