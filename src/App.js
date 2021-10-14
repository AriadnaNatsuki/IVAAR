
import { Route, Switch } from 'react-router';
import './App.css';
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AdoptList from './components/AdoptList/AdoptList'
import AnimalItem from './components/AnimalItem/AnimalItem';
import NewAnimal from './components/NewAnimal/NewAnimal'
import NewAllert from './components/NewAllert/NewAllert.jsx'
import Login from './components/login/Login'
import Register from './components/register/Register'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
       <Route path="/" exact component={Home}/>
        <Route path='/login' component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/adopt" component={AdoptList} exact />
        <Route path="/new-animal" exact component={NewAnimal}/>
        <Route exact path="/adopt/:id" component={AnimalItem}/>
        {/* <Route path="/foster-homes" component={FosterHomes} />
        <Route exact path="/foster-homes/:animalId" component={AnimalFoster} /> */} 
          {/* <Route path="/all-allerts" component={AllertList} /> */}
           <Route path="/new-allert" component={NewAllert} />
      
      
      </Switch>
    </div>
  );
}

export default App;
