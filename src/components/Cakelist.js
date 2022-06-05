import Cake from "./Cake"
import axios from "axios"
import { useState, useEffect } from "react"
import Loader from "./Loader"
import { connect , dispatch} from "react-redux"
function Cakelist(props){
   
    
    var [loading,setLoading] = useState(false)

    useEffect(()=>{       
        if(props.cakes.length==0){
            setLoading(true)
            axios({
                url:"https://apifromashu.herokuapp.com/api/allcakes",
                method:"get"
            }).then((response)=>{
                setLoading(false)
                console.log("response from api", response.data.data)
                props.dispatch({
                    type : "INITIALISE_CAKES",
                    payload : response.data.data
                })
                
            },(error)=>{
                setLoading(false)
                console.log("Error from api is" , error)
            })
        }
        
    },[])

    
   

   return (
       <div className="row" style={{marginLeft : "50px"}}>
         {props.cakes.map((each,index)=>{
             return <Cake data={each} key={index} />
         })}
         
        <Loader loading={loading} />      
       </div>
   )
}

export default connect(function (state, props){
    return{
        cakes : state.cakes
      }
})(Cakelist)