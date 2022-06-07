import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
//for fetching data from api use middleware--saga ->npm install redux-saga

function Soppingcart(props) {
    var dispatch = useDispatch()

    useEffect(()=>{
        dispatch({
            type : "GET_CART"
        })
    },[])
  return (
    <div className='container'>
        <h1>Your Cart</h1>
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
}) (Soppingcart)
