
import { Route, Switch } from 'react-router';
import './App.css';
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/adopt" component={Adopt} />
        <Route exact path="/adopt/:animalId" component={AnimalAdoption}/>
        <Route path="/foster-homes" component={FosterHomes} />
        <Route exact path="/foster-homes/:animalId" component={AnimalFoster} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login}/> */}
      </Switch>
    </div>
  );
}

export default App;
