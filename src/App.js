import React, { Component } from 'react';
import Customers from './components/customers';
import { Route,Redirect, Switch} from 'react-router-dom';
import './App.css'
import Home from './components/home';
import Training from './components/training';
import  NavBar from './components/navBar';
import NotFound from './components/not-found';
//import AddTrainingToCustomers from './components/addTrainingsToCustomer';





class App extends Component {
  render() {
    return (
      <React.Fragment>


      <NavBar/>
            <main className = "container">
                <Switch>
                <Route  path="/home" component={Home} />
                <Route path="/customers" component={Customers} />
                <Route path="/training" component={Training} />
                <Route path = "/not-found" component = {NotFound}/>
                {/* <Route path = "/addTrainingsToCustomer" component = {AddTrainingToCustomers}/> */}
                <Redirect from = "/" exact  to ="/home"/>
                <Redirect  to ="/not-found"/>

                </Switch>
            </main>
      </React.Fragment>
    );
  }
}

export default App;