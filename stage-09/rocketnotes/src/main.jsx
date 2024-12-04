import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import GlogalStyles from './styles/global'

import theme from './styles/theme'

import { SignIn } from './pages/SignIn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlogalStyles />
        <SignIn />
    </ThemeProvider>
  </StrictMode>
)
