import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {Switch,Link} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import DisplayComp from './displayComp';
import React, { useState } from 'react';
import weatherUtils from './weatherUtils';


function DayComp(props)
{

  
 console.log("props",props.location.state) 
 let dayData = props.location.state.forcast
//  console.log(dayData)
//  console.console.log(props.location.state);
      return(
        <div className="display-flex">
        
        <div className="font-face-gm">
        <h2><u><b>Today :</b></u></h2>
        {dayData.weather_state_name}<br/>
        Max : <br/>
        {dayData.max_temp.toFixed(2)}<br/>
        Min : <br/>
        {dayData.min_temp.toFixed(2)}<br/>
        Humidity :<br/>
        {dayData.humidity.toFixed(2)}<br/>
        Visibility :<br/>
        {dayData.visibility.toFixed(2)}<br/>
        Pressure :<br/>
        {dayData.air_pressure.toFixed(2)}<br/>
        Confidence :<br/>
        {dayData.predictability}<br/>
        </div>

        </div>
      )
    
}

export default DayComp;
