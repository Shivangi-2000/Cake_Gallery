import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Address from './Address'

function Summary(props) {
  var dispatch = useDispatch()
  let totalPrice = 0
  var [isNext, setIsNext] = useState(false)


  useEffect(()=>{
    dispatch({
        type : "GET_CART"
    })
},[])


  return (
     <div className='form-control container'>
      <h3>Summary</h3><br></br>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
      <tbody>
      {props.cartitems.map((each, index)=>{
        totalPrice = totalPrice + each.quantity*each.price
         return (<tr>
          <th scope="row">{index+1}</th>
          <td>{each.name}</td>
          <td><img src={each.image} style={{height:"60px" ,width:"60px"}}></img></td>
          <td>{each.quantity}</td>
          <td>{each.price}</td>
          
        
        </tr>)

      })}
      
      </tbody>
      </table>
      
    </div>
  )
}

export default connect(function(state, props){
  return{
    cartitems : state.cartitems||[]
}
}) (Summary)