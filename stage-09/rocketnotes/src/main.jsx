import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import GlogalStyles from './styles/global'

import theme from './styles/theme'

import { Profile } from './pages/Profile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlogalStyles />
        <Profile />
    </ThemeProvider>
  </StrictMode>
)
