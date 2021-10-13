import './App.css';
import { Switch, Route} from  "react-router-dom";
import LoadContainer from './components/Loads/LoadContainer';
import NavBar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Carriercontainer from './components/Signupcarrier/CarrierContainer';
import Shippercontainer from './components/Signupshipper/Shippercontainer';
import CreateLoadContainer from './components/Createload/CreateLoadContainer';
import AssignLoadContainer from './components/assignload/AssignLoadContainer';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/loads">
    <LoadContainer/>
    </Route>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/signupcarrier">
    <Carriercontainer/>
   </Route>
   <Route exact path="/signupshipper">
     <Shippercontainer/>
   </Route>\
   <Route exact path="/createload">
    <CreateLoadContainer/>
   </Route>
   <Route exact path='/assignload'>
     <AssignLoadContainer/>
   </Route>
    </Switch>
    </div>
  );
}

export default App;
