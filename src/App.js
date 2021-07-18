import './App.css';
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Error404 from './components/Error404'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => ( <Redirect to="/home"/>)}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
