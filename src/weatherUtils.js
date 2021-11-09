import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';




let getWeatherDataByLOcation  = async(country) =>
 {
     console.log(country)
    switch(country){
        case "New York":
            let resp = await axios.get("https://www.metaweather.com/api/location/2459115/")
            let forCast1 = resp.data;
            console.log(forCast1)
            return forCast1
            break;
        case "Los Angeles":
            let resp1 = await axios.get("https://www.metaweather.com/api/location/2442047/")
            let forCast2 = resp1.data;
            return forCast2
            break;
        case "Marseille":
            let resp2 = await axios.get("https://www.metaweather.com/api/location/610264/")
            let forCast3 = resp2.data;
            return forCast3
            break;
        case "Barcelona":
            let resp3 = await axios.get("https://www.metaweather.com/api/location/753692/")
            let forCast4 = resp3.data;
            return forCast4
            break;
        case "Rome":
            let resp4 = await axios.get("https://www.metaweather.com/api/location/721943/")
            let forCast5 = resp4.data;
            return forCast5
            break;
        default:
            ;
    }

    
    //     console.log(country)
    // let resp = await axios.get("https://www.metaweather.com/api/location/2459115/")
    // let forCast1 = resp.data;
    // console.log(forCast1.id)
    // return forCast1
    
   
    // let user = users.filter(x=> x.title == 1 )
    // userData.email = user.email;
    // userData.city = user.city;
    // userData.id = user.id;
    // console.log(user.email)
    // let userid = user.map(x => x.id)


}

let getUserDataById  = async(name) =>
{
    let userData = {}
    let resp = await axios.get("https://jsonplaceholder.typicode.com/users/"+name)
    let users = resp.data;
    console.log(name)
    let user = users.filter(x=> x.name == name )
    userData.email = user.email;
    userData.city = user.city;
    userData.id = user.id;
    console.log(user.name)
    let userid = user.map(x => x.id)
    return user;

}

export default {getWeatherDataByLOcation,getUserDataById};
