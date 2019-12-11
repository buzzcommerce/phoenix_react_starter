/** @jsx jsx */

import { jsx, ThemeProvider } from 'theme-ui'

import Hello from '~/components/Hello'
import Posts from '~/components/Posts'
import { theme } from '~/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Hello />
      <Posts />
    </ThemeProvider>
  )
}
