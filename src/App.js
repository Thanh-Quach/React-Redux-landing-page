import React, { useEffect } from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Home from './screens/home/index';
import Epenstore from './screens/epenstore/index';

import Pricing from "./screens/pricing";
import Account from "./screens/account/account";
import ManageAccount from "./screens/account/manageAccount";
import About from "./screens/about/about";

import Register from "./screens/register/register";

import Globalnavigation from './components/navigation';
import ScrollButton from "./components/scrollTopBtn";
import Footer from'./components/footer';


function App() {
  useEffect(() => {
    document.title = "EPenClass | Advocating Technology That Truly Empowers Educators"
  })

  return (
    <Router basename={'/epenclass'}>
      <div className="App">
        <Globalnavigation />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/epenstore"} component={Epenstore} />
          
          <Route path={"/pricing"} component={Pricing} />
          <Route path={"/account"} component={Account} />
          <Route path={"/account-main"} component={ManageAccount}/>
          <Route path={"/about"} component={About} />

          <Route path={"/register"} component={Register} />
        </Switch>
        <ScrollButton/>
        <Footer/>
      </div>
    </Router>
  )

}

export default App;
