import { Router } from 'react-router-dom'
import history from './history'
import GlobalStyle from './styles/GlobalStyle'
import { Routes } from "./routes"
import { AuthProvider } from './Context/auth'


function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </AuthProvider>
  );
}

export default App;
