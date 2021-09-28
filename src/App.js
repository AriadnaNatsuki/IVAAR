
import { Route, Switch } from 'react-router';
import './App.css';
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AdoptList from './components/AdoptList/AdoptList'
import NewAllert from './components/NewAllert/NewAllert.jsx'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/adopt" component={AdoptList} />
        {/* <Route exact path="/adopt/:animalId" component={AnimalItem}/>
        <Route path="/foster-homes" component={FosterHomes} />
        <Route exact path="/foster-homes/:animalId" component={AnimalFoster} /> */}
          {/* <Route path="/all-allerts" component={AllertList} /> */}
           <Route path="/new-allert" component={NewAllert} />
        {/* <Route path="/register" component={Register} />
        <Route path="/login" component={Login}/>  */}
      </Switch>
    </div>
  );
}

export default App;
