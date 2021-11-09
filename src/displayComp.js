import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
//import {Switch,Route,Link} from 'react-router-dom';
import { Routes ,Route, Link } from 'react-router-dom';
import { IconName } from "react-icons/fa";
import { WiHail,WiDaySunny,WiDayRainMix } from "react-icons/wi";
import weatherUtils from './weatherUtils';
import React, { useState, useEffect } from 'react';


function DisplayComp()
{

  const[foreCast,setForeCast] = useState({})
  const[country,setCountry] = useState('')
  const[item1,setItem1] = useState(0)
  useEffect(async() => {
    
     
      //   setCountry({country:e.target.value})
      //   let resp = await weatherUtils.getWeatherDataByLOcation(e.target.value) 
      //             setForeCast({foreCast:resp})
      //             setItem({item:foreCast})
      //            console.log("I hear")
      //           //  sessionStorage.setItem('data',json.stringify(foreCast))
      // } 
    
    },[])
    
    
  //});
async function changeHandle (e)
{
  
  setCountry({country:e.target.value})
  let resp = await weatherUtils.getWeatherDataByLOcation(e.target.value) 
            setForeCast(resp)
            //setItem({item:foreCast})
           console.log("I hear")
           console.log(foreCast)
          //  sessionStorage.setItem('data',json.stringify(foreCast))
}
 
    let date = new Date();
    let hour = date.getHours()
    let minuts = date.getMinutes()
    console.log(foreCast)



  
    return(
      
      <div className="font-face-gm">
         {/* <div style={{float:'top'}}>
        <select 
                style = {{width : "15%"}} 
                onChange = {changeHandle} >
        <option value="">Select a Country</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Marseille">Marseille</option>
        <option value="Barcelona">Barcelona</option>
        <option value="Rome">Rome</option>
        </select>
        </div><br/><br/><br/> */}
          <div>
        <label for = "countries">Select A Country  : </label>
        <select  style = {{width : "15%"}} 
               name = "countries" id = "countries"
               onChange = {changeHandle} >
                 <option value="">Countries</option>
         <optgroup label = " North America">
           <option value = "New York">New York</option>
           <option value = "Los Angeles">Los Angeles</option>
         </optgroup>
         <optgroup label = " Europe">
         <option value = "Marseille">Marseille</option>
         <option value = "Barcelona">Barcelona</option>
         <option value = "Rome">Rome</option>
         </optgroup>
        </select>
        </div><br/><br/>
        


        {/* <div style={{float:'right'}}>{hour,minuts}</div><br/> */}
         {/* sunRise : <div style={{float:'right'}}>{foreCast && foreCast.sun_rise.toFixed(7)}</div><br/>
         sunSet : <div style={{float:'right'}}>{foreCast && foreCast.sun_set.toFixed(7)}</div> */}
        

        {/* Name :{foreCast.consolidated_weather.id} <br/>
        Email :{email}  */}
        <div className="font-face-gm">{<h1>{foreCast && foreCast.title}</h1>}</div><br/><br/><br/>
        
<div className="display-flex">
  <div className="font-face-gm"> 
    <Link to  = {{ pathname:"/DayComp" ,state : {forcast:foreCast.consolidated_weather && foreCast.consolidated_weather[0]}}} >Today</Link><br/><br/>
             
     {foreCast.consolidated_weather && foreCast.consolidated_weather[0].weather_state_name}<br/>
        Max :{foreCast.consolidated_weather && foreCast.consolidated_weather[0].max_temp.toFixed(2)}<br/>
        Min :{foreCast.consolidated_weather && foreCast.consolidated_weather[0].min_temp.toFixed(2)}<br/>
        Humidity : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[0].humidity}<br/>
        Visibility : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[0].visibility.toFixed(2)}<br/>
        Pressure : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[0].air_pressure.toFixed(2)}<br/>
        Confidence : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[0].predictability} 
  </div>
  <div className="font-face-gm"> 
  <Link to  = {{ pathname:"/DayComp" ,state : {forcast:foreCast.consolidated_weather && foreCast.consolidated_weather[1]}}}>Tomorrow</Link><br/><br/>             
    {foreCast.consolidated_weather && foreCast.consolidated_weather[1].weather_state_name}<br/>
        Max :{foreCast.consolidated_weather && foreCast.consolidated_weather[1].max_temp.toFixed(2)}<br/>
        Min :{foreCast.consolidated_weather && foreCast.consolidated_weather[1].min_temp.toFixed(2)}<br/>
        Humidity : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[1].humidity}<br/>
        Visibility : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[1].visibility.toFixed(2)}<br/>
        Pressure : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[1].air_pressure.toFixed(2)}<br/>
        Confidence : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[1].predictability}
  </div>
  <div className="font-face-gm">  
  <Link to  = {{ pathname:"/DayComp" ,state : {forcast:foreCast.consolidated_weather && foreCast.consolidated_weather[2]}}} >Tus/9 Nov</Link><br/><br/>          
     {foreCast.consolidated_weather && foreCast.consolidated_weather[2].weather_state_name}<br/>
        Max :{foreCast.consolidated_weather && foreCast.consolidated_weather[2].max_temp.toFixed(2)}<br/>
        Min :{foreCast.consolidated_weather && foreCast.consolidated_weather[2].min_temp.toFixed(2)}<br/>
        Humidity : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[2].humidity}<br/>
        Visibility : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[2].visibility.toFixed(2)}<br/>
        Pressure : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[2].air_pressure.toFixed(2)}<br/>
        Confidence : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[2].predictability}
  </div>
  <div className="font-face-gm">  
  <Link to  = {{ pathname:"/DayComp" ,state : {forcast:foreCast.consolidated_weather && foreCast.consolidated_weather[3]}}} >Wed/10 Nov</Link><br/><br/>
    {foreCast.consolidated_weather && foreCast.consolidated_weather[3].weather_state_name}<br/>
        Max :{foreCast.consolidated_weather && foreCast.consolidated_weather[3].max_temp.toFixed(2)}<br/>
        Min :{foreCast.consolidated_weather && foreCast.consolidated_weather[3].min_temp.toFixed(2)}<br/>
        Humidity : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[3].humidity}<br/>
        Visibility : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[3].visibility.toFixed(2)}<br/>
        Pressure : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[3].air_pressure.toFixed(2)}<br/>
        Confidence : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[3].predictability}
  </div>
   <div className="font-face-gm">  
  <Link to  = {{ pathname:"/DayComp" ,state : {forcast:foreCast.consolidated_weather && foreCast.consolidated_weather[4]}}} >Thur/11 Nov</Link><br/><br/>
    {foreCast.consolidated_weather && foreCast.consolidated_weather[4].weather_state_name}<br/>
        Max :{foreCast.consolidated_weather && foreCast.consolidated_weather[4].max_temp.toFixed(2)}<br/>
        Min :{foreCast.consolidated_weather && foreCast.consolidated_weather[4].min_temp.toFixed(2)}<br/>
        Humidity : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[4].humidity}<br/>
        Visibility : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[4].visibility.toFixed(2)}<br/>
        Pressure : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[4].air_pressure.toFixed(2)}<br/>
        Confidence : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[4].predictability}
  </div>
  <div className="font-face-gm"> 
  <Link to  = {{ pathname:"/DayComp" ,state : {forcast:foreCast.consolidated_weather && foreCast.consolidated_weather[5]}}}>Fri/12 Nov</Link><br/><br/>
     {foreCast.consolidated_weather && foreCast.consolidated_weather[5].weather_state_name}<br/>
        Max :{foreCast.consolidated_weather && foreCast.consolidated_weather[5].max_temp.toFixed(2)}<br/>
        Min :{foreCast.consolidated_weather && foreCast.consolidated_weather[5].min_temp.toFixed(2)}<br/>
        Humidity : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[5].humidity}<br/>
        Visibility : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[5].visibility.toFixed(2)}<br/>
        Pressure : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[5].air_pressure.toFixed(2)}<br/>
        Confidence : <br/>
        {foreCast.consolidated_weather && foreCast.consolidated_weather[5].predictability}
  </div>


</div>   
      

      </div>
    )
     
  
}
export default DisplayComp;



