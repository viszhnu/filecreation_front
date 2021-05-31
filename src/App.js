import logo from './logo.svg';
import './App.css';
import {getApi} from './Api';
import {useEffect, useState} from "react";
import axios from "axios";
import Table from './Table';
import CreateFolder from './createFolder';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  let[data, setdata]=useState([]);
  useEffect(async ()=>{
    let d=await getApi();
      setdata(d.data)
      console.log("ddddddddd"); 
      console.log(d,"a");
  },[])
  return (
    <Router>
     <Switch>
    <Route component={CreateFolder} path="/createFolder">
    </Route>
    <Route path="/">
    <Table userdata={data}></Table>
      </Route>
       </Switch>
    </Router>
  );
}

export default App;
