import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//for fetching data from api use middleware--saga ->npm install redux-saga

function Soppingcart(props) {
    var dispatch = useDispatch()
    let totalPrice = 0

    useEffect(()=>{
        dispatch({
            type : "GET_CART"
        })
    },[])
  return (
    <div className='container'>
        <h1>Your Cart</h1>
        <div className='row'>
          <div className='col-md-9'>
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
          <td><button className='btn btn-secondary' >+</button>{each.quantity}<button className='btn btn-secondary' >-</button></td>
          <td>{each.price}</td>
          <td><button className='btn btn-danger' >X</button></td>
        </tr>)

      })}
    
    
  </tbody>
</table>

          </div>
          <div className='col-md-3'>
            <h3>Total price:{totalPrice}</h3>
            <Link to="/checkout"><button className='btn btn-warning'>Checkout</button></Link> 
          </div>
        </div>
                
            
        

    </div>
  )
}
export default connect(function(state, props){
    return{
        cartitems : state.cartitems||[]
}
}) (Soppingcart)
