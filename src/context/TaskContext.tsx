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
        const updatedTasks = state.tasks.filter(
          (task) => task.id === action.payload.taskId,
        )

        const isCompletedValue = updatedTasks.map((task) => task.isCompleted)

        if (isCompletedValue[0] === false) {
          return {
            ...state,
            tasks: state.tasks.map(() => {
              return updatedTasks.map((task) => (task.isCompleted = true))
            }),
          }
        }
      }

      if (action.type === 'MARK_AS_INCOMPLETE') {
        const updatedTasks = state.tasks.filter(
          (task) => task.id === action.payload.taskId,
        )

        const isIncompletedValue = updatedTasks.map((task) => task.isCompleted)

        if (isIncompletedValue[0] === true) {
          return {
            ...state,
            tasks: state.tasks.map(() => {
              return updatedTasks.map((task) => (task.isCompleted = false))
            }),
          }
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

    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
  }

  function deleteTask(taskId: string) {
    dispatch({
      type: 'DELETE_TASK',
      payload: {
        taskId,
      },
    })

    const deletedTasks = tasks.filter((task: any) => task.id !== taskId)
    localStorage.setItem('tasks', JSON.stringify(deletedTasks))
  }

  function markTaskAsCompleted(taskId: string) {
    dispatch({
      type: 'MARK_AS_COMPLETE',
      payload: {
        taskId,
      },
    })

    const updatedTasks = tasks.map((task: any) => {
      if (task.id === taskId) {
        return { ...task, id: task.id, isCompleted: true, task: task.task }
      }
      return task
    })
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  function markTaskAsIncompleted(taskId: string) {
    dispatch({
      type: 'MARK_AS_INCOMPLETE',
      payload: {
        taskId,
      },
    })

    const updatedTasks = tasks.map((task: any) => {
      if (task.id === taskId) {
        return { ...task, id: task.id, isCompleted: false, task: task.task }
      }
      return task
    })
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')

    if (storedTasks) {
      dispatch({ type: 'SET_TASKS', payload: JSON.parse(storedTasks) })
    }
  }, [])

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
