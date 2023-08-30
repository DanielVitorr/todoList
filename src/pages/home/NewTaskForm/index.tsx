import { FormProvider, useForm } from 'react-hook-form'
import { PlusCircle } from 'phosphor-react'
import { NewTaskFormContainer } from './styles'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TaskContext } from '../../../context/TaskContext'

const newTaskFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a terefa'),
})

type NewTaskFormData = zod.infer<typeof newTaskFormValidationSchema>

export function NewTaskForm() {
  const { createNewTask } = useContext(TaskContext)

  const newTaskForm = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: {
      task: '',
    },
  })

  const { handleSubmit, reset, watch, register } = newTaskForm

  function handleCreateNewTask(data: NewTaskFormData) {
    createNewTask(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDesabled = !task

  return (
    <NewTaskFormContainer>
      <FormProvider {...newTaskForm}>
        <form onSubmit={handleSubmit(handleCreateNewTask)}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            {...register('task')}
            id="task"
          />

          <button disabled={isSubmitDesabled} type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
      </FormProvider>
    </NewTaskFormContainer>
  )
}
