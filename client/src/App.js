import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./components/navbar.component"
import SpeedrunsList from "./components/speedruns-list.component"
import EditSpeedrun from "./components/edit-speedrun.component"
import CreateSpeedrun from "./components/create-speedrun.component"
import CreateUser from "./components/create-user.component"

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path = '/' exact component = {SpeedrunsList} />
      <Route path = '/edit/:id' component = {EditSpeedrun} />
      <Route path = '/create' component = {CreateSpeedrun} />
      <Route path = '/user' component = {CreateUser} />
    </Router>
  );
}

export default App;
