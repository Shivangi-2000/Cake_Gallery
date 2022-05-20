import Cake from "./Cake"
import axios from "axios"
import { useState, useEffect } from "react"
import Loader from "./Loader"
function Cakelist(){
   
    var [cakes,setCakes] = useState([])
    var [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios({
            url:"https://apifromashu.herokuapp.com/api/allcakes",
            method:"get"
        }).then((response)=>{
            setLoading(false)
            console.log("response from api", response.data.data)
            setCakes(response.data.data)
        },(error)=>{
            setLoading(false)
            console.log("Error from api is" , error)
        })
    },[])

    
   

   return (
       <div className="row">
         {cakes.map((each,index)=>{
             return <Cake data={each} key={index} />
         })}
         
        <Loader loading={loading} />      
       </div>
   )
}

export default Cakelist