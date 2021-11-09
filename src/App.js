import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Switch, Router, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './index.css';
import './i18n';
import { withNamespaces } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayComp from './displayComp';
import weatherUtils from './weatherUtils';
import DayComp from './DayComp';

function App({ t }) {

  const [item, setItem] = useState('')

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // }



  return (
    <div>
      <center>
        <div className="font-face-bl"><h1>Weather Info</h1></div><br /><br />
      </center>

      {/* <div style={{ float: 'top' }}>
        <select
          style={{ width: "15%" }}
          onChange={(e) => changeLanguage(e)} >
          <option value="">Select a Language</option>
          <option value="New York">EN</option>
          <option value="Los Angeles">HE</option>
        </select>
      </div> */}


      {/* <h1>{t('Welcome to React')}</h1> */}


      <br /><br />
      {/* <DisplayComp /> */}

      <Switch>
        <Route exact path="/" component={DisplayComp} />
        <Route path="/DayComp" component={DayComp} />
      </Switch>







    </div>
  )

}

export default withNamespaces()(App);
