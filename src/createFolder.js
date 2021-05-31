import React from "react";
import {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {postApi} from './Api';
function CreateFolder(){
  useEffect(async()=>{
     await postApi();
  })
    return(
        <>
        <h1>File is created</h1>
          <Link to="/">okay</Link>
        </>
    )
}

export default CreateFolder;