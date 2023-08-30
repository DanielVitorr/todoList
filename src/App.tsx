import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'

import { defaultTheme } from './styles/themes/default'
import { Home } from './pages/home'
import { TaskContextProvider } from './context/TaskContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
