// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/main';
function App() {
  return (
    <div className="App">
      <Router>
    <Route path='/' exact>
     <Login/>
    </Route>
    <Route path='/home' exact>
    <Main/>
    </Route>
    
      </Router>

    </div>
  );
}

export default App;
