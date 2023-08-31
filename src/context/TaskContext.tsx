import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface TaskData {
  task: string
}

interface Task {
  id: string
  task: string
  isCompleted: boolean
}

interface TaskContextType {
  tasks: Task[]
  activeTaskId: string | null
  createNewTask: (data: TaskData) => void
  deleteTask: (taskId: string) => void
  markTaskAsCompleted: (taskId: string) => void
  markTaskAsIncompleted: (taskId: string) => void
}

export const TaskContext = createContext({} as TaskContextType)

interface TaskContextProviderProps {
  children: ReactNode
}

interface TaskState {
  tasks: Task[]
  activeTaskId: string | null
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [taskState, dispatch] = useReducer(
    (state: TaskState, action: any) => {
      if (action.type === 'ADD_NEW_TASK') {
        return {
          ...state,
          tasks: [...state.tasks, action.payload.newTask],
          activeTaskId: action.payload.newTask.id,
        }
      }

      if (action.type === 'DELETE_TASK') {
        const updatedTasks = state.tasks.filter(
          (task) => task.id !== action.payload.taskId,
        )
        return {
          ...state,
          tasks: updatedTasks,
          activeTaskId: null,
        }
      }

      if (action.type === 'MARK_AS_COMPLETE') {
        const updatedTasks = state.tasks.map((task) => {
          if (task.id === action.payload.taskId) {
            return {
              ...task,
              isCompleted: true,
            }
          }

          return task
        })

        return {
          ...state,
          tasks: updatedTasks,
        }
      }

      if (action.type === 'MARK_AS_INCOMPLETE') {
        const updatedTasks = state.tasks.map((task) => {
          if (task.id === action.payload.taskId) {
            return {
              ...task,
              isCompleted: false,
            }
          }

          return task
        })

        return {
          ...state,
          tasks: updatedTasks,
        }
      }

      if (action.type === 'SET_TASKS') {
        return {
          ...state,
          tasks: action.payload,
        }
      }

      return state
    },
    {
      tasks: [],
      activeTaskId: null,
    },
  )

  const { tasks, activeTaskId } = taskState

  function createNewTask(data: TaskData) {
    const id = uuidv4()

    const newTask: Task = {
      id,
      task: data.task,
      isCompleted: false,
    }

    dispatch({
      type: 'ADD_NEW_TASK',
      payload: {
        newTask,
      },
    })
  }

  function deleteTask(taskId: string) {
    dispatch({
      type: 'DELETE_TASK',
      payload: {
        taskId,
      },
    })
  }

  function markTaskAsCompleted(taskId: string) {
    dispatch({
      type: 'MARK_AS_COMPLETE',
      payload: {
        taskId,
      },
    })
  }

  function markTaskAsIncompleted(taskId: string) {
    dispatch({
      type: 'MARK_AS_INCOMPLETE',
      payload: {
        taskId,
      },
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createNewTask,
        deleteTask,
        activeTaskId,
        markTaskAsCompleted,
        markTaskAsIncompleted,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
