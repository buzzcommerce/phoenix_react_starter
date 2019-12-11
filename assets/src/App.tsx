/** @jsx jsx */

import { jsx, ThemeProvider } from 'theme-ui'

import Hello from '~/components/Hello'
import { theme } from '~/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Hello />
    </ThemeProvider>
  )
}
