
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Deals from './components/Deals/Deals';
import CheckOut from './components/CheckOut/CheckOut';
function App() {
  return (
    <div className="container">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/order">
            <Orders />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/checkout/:id">
            <CheckOut />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
