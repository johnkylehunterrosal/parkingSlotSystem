import React, {useState} from 'react';
import "./MainRoutePage.css"
import "../../Helper.css"
import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import ParkingSlots from './ParkingSlots';
const MainRoutePage = (props) => {
  const [parkingSlots, setParkingSlots] = useState(
    {
      entryPointA : [
        {
          name : "A1s", plate: "", size : "Small", timeStarted : "", timeEnded : "", availability : true, price : 20
        },
        {
          name: "A2s", plate: "", size : "Small", timeStarted : "", timeEnded : "", availability : true, price : 20
        },
        {  
          name : "A3s", plate: "", size : "Small", timeStarted : "", timeEnded : "", availability : true, price : 20
        },
        {
          name: "A4s", plate: "", size : "Small", timeStarted : "", timeEnded : "", availability : true, price : 20
        },
        {
          name: "A1m", plate: "pnz321", size : "Medium", timeStarted : 1657593631000, timeEnded : "", availability : false, price : 60
        },
        {
          name : "A2m", plate: "nnn678", size : "Medium",timeStarted : 1657507231000, timeEnded : "", availability : false, price : 60
        },
        {  
          name: "A3m", plate: "", size : "Medium", timeStarted : "", timeEnded : "", availability : true, price : 60
        },
        {
          name : "A4m", plate: "", size : "Medium", timeStarted : "", timeEnded : "", availability : true, price : 60
        },
        {
          name: "A1L", plate: "", size : "Large", timeStarted : "", timeEnded : "", availability : true, price : 100
        },
        {
          name : "A2l", plate: "", size : "Large", timeStarted : "", timeEnded : "", availability : true, price : 100
        },
        {  
          name: "A3l", plate: "", size : "Large", timeStarted : "", timeEnded : "", availability : true, price : 100
        },
        {
          name : "A4l", plate: "", size : "Large", timeStarted : "", timeEnded : "", availability : true, price : 100
        },
      ],
      entryPointB : [
        {
          name : "B1s", plate: "", size : "Small", timeStarted : "", timeEnded : "", availability : true, price : 20
        },
        {
          name: "B2s", plate: "", size : "Small",  timeStarted : "", timeEnded : "", availability : true, price : 20
        },
        {  
          name : "B3s", plate: "", size : "Small",  timeStarted : "", timeEnded : "", availability : true, price : 20
        },
        {
          name: "B4s", plate: "", size : "Small",  timeStarted : "", timeEnded : "", availability : true, price : 20
        },
        {
          name: "B1m", plate: "", size : "Medium",  timeStarted : "", timeEnded : "", availability : true, price : 60
        },
        {
          name : "B2m", plate: "", size : "Medium", timeStarted : "", timeEnded : "", availability : true, price : 60
        },
        {  
          name: "B3m", plate: "", size : "Medium",  timeStarted : "", timeEnded : "", availability : true, price : 60
        },
        {
          name : "B4m", plate: "", size : "Medium",  timeStarted : "", timeEnded : "", availability : true, price : 60
        },
        {
          name: "B1l", plate: "", size : "Large",  timeStarted : "", timeEnded : "", availability : true, price : 100
        },
        {
          name : "B2l", plate: "", size : "Large",  timeStarted : "", timeEnded : "", availability : true, price : 100
        },
        {  
          name: "B3l", plate: "", size : "Large",  timeStarted : "", timeEnded : "", availability : true, price : 100
        },
        {
          name : "B4l", plate: "", size : "Large",  timeStarted : "", timeEnded : "", availability : true, price : 100
        },
      ],
      entryPointC : [
        {
          name : "C1s", plate: "", size : "Small",  timeStarted : "", timeEnded : "", availability : true, price : 20
        },
        {
          name: "C2s", plate: "", size : "Small",  timeStarted : "", timeEnded : "", availability : true, price : 20
        },
        {  
          name : "C3s", plate: "", size : "Small", timeStarted : "", timeEnded : "", availability : true, price : 20
        },
        {
          name: "C4s", plate: "", size : "Small",  timeStarted : "", timeEnded : "", availability : true, price : 20
        },
        {
          name: "C1m", plate: "", size : "Medium",  timeStarted : "", timeEnded : "", availability : true, price : 60
        },
        {
          name : "C2m", plate: "", size : "Medium", timeStarted : "", timeEnded : "", availability : true, price : 60
        },
        {  
          name: "C3m", plate: "", size : "Medium", timeStarted : "", timeEnded : "", availability : true, price : 60
        },
        {
          name : "C4m", plate: "", size : "Medium", timeStarted : "", timeEnded : "", availability : true, price : 60
        },
        {
          name: "C1l", plate: "", size : "Large",  timeStarted : "", timeEnded : "", availability : true, price : 100
        },
        {
          name : "C2l", plate: "", size : "Large", timeStarted : "", timeEnded : "", availability : true, price : 100
        },
        {  
          name: "C3l", plate: "", size : "Large",  timeStarted : "", timeEnded : "", availability : true, price : 100
        },
        {
          name : "C4l", plate: "", size : "Large", timeStarted : "", timeEnded : "", availability : true, price : 100
        },
      ]
    }
  )
  
    return (
      <div>
        <Switch>
            <Route path="/">
              <Home/>
              <ParkingSlots parkingSlots={parkingSlots} setParkingSlots={setParkingSlots}/>
            </Route>
            <Route path="/parking-slots" >
              
            </Route>       
        </Switch>    
      </div>   
  );
}
export default MainRoutePage;