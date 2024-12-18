import { StrictMode } from 'react'
import { createRoot}  from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { NewMovie } from './pages/NewMovie'
import { MoviePreview } from './pages/MoviePreview'
import { SignIn } from './pages/SignIn'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <SignIn />
    </ThemeProvider>
  </StrictMode>
)
