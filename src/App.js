import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/Home';

const theme = createTheme({
  typography: ['Roboto', 'Open Sana'],
  palette: {
    main: {
      primary: '#3036C3'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home></Home>
    </ThemeProvider>
  )
}

export default App;
