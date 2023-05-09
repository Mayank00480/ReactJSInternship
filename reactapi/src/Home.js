import Data from './Data'
import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Home = () =>{
    const navigate = useNavigate()
    const goToSummary = (value) => {
        navigate('/summary' ,{state : {value : value}})
    }
    return  <div className = "body" >
    {

   Data.map((curElem ,index) =>(
 
     <div className = "container">
     <div className ="card" key ={index}>
       <div className ="showName"><p>showName :</p><p>{curElem.show.name}</p> </div>
       <div className ="showName"><p>showStatus :</p><p>{curElem.show.status}</p> </div>
       <div className ="showName"><p>premieredOn :</p><p>{curElem.show.premiered}</p> </div>
       <div className ="showName"><p>showType :</p><p>{curElem.show.type}</p> </div>
       <div className ="showName"><p>Language :</p><p>{curElem.show.language}</p> </div>
       <div className ="showName"><p>Ratings :</p><p>{curElem.show.rating.average}</p> </div>
       <div className ="showName"><p>averageRuntime :</p><p>{curElem.show.averageRuntime}</p> </div>
     <div className ="button" onClick = {() => {goToSummary(curElem.show)}} ><button>Summary</button></div>
     
   
    </div>
         </div>
    
   )
   )
   }    
   </div>

 }
export default Home;

