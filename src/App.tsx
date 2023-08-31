import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'

import { defaultTheme } from './styles/themes/default'
import { Home } from './pages/home'
import { TaskContextProvider } from './context/TaskContext'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DndProvider backend={HTML5Backend}>
        <TaskContextProvider>
          <Home />
        </TaskContextProvider>
        <GlobalStyles />
      </DndProvider>
    </ThemeProvider>
  )
}
