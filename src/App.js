import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

//引入模块
import Home from "./components/Home";
import Classify from "./components/Classify";
import Shopcar from "./components/Shopcar";
import My from "./components/My";
import Reg from "./components/Reg";
import MyShow from "./components/MyShow";

const App = () => (
  <Router>
    <div id="app">
      <Route exact path="/" component={Home}/>
      <Route path="/classify" component={Classify}/>
      <Route path="/shopcar" component={Shopcar}/>
      <Route path="/my" component={My}/> 
      <Route path="/reg" component={Reg}/> 
      <Route path="/myshow" component={MyShow}/>
    </div>
  </Router>
)

export default App;