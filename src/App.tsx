import { Router } from 'react-router-dom'
import history from './history'
import GlobalStyle from './styles/GlobalStyle'
import { Routes } from "./routes"
import { Contexts } from "./Context"


function App() {
  return (
    <Contexts>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Contexts>
  );
}

export default App;
