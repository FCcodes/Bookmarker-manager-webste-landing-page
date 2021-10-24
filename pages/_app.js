import '../styles/globals.css'

//material-ui
import { ThemeProvider } from '@mui/material/styles'

//lib
import theme from '../lib/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>  
  )
}

export default MyApp
