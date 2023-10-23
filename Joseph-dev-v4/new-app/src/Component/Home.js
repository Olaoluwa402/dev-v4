import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { Globalcontext } from '../Context'
import Orders from './Orders/Orders'

const Home = () => {
    const {isLoading, priceTotal, Price} = useContext(Globalcontext)
    console.log(isLoading);
    console.log(priceTotal);

    const [api,setApi]= useState([])

    const getApi =async()=>{
        const url = "https://jsonplaceholder.typicode.com/photos"

        try{
            const{data}=  await axios.get(url)
            console.log(data, "data")
            setApi(data.slice(0,10))


        }catch(err){
            console.log(err)
        }
    }


    useEffect(()=>{
        getApi();
    },[])
    

    
  return (
    <div>
        <p>{priceTotal} </p>
        <button onClick={(()=> {
            Price()
        })}>Get price total</button>
    <div>{api.map((photo)=>
        <ul key={photo.id}>
            <li><img src={photo.url} alt={photo.title}/> </li>
        </ul>
        
        )}</div>
        <Orders />
        
        </div>

  )
}

export default Home