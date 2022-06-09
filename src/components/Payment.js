import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

function Payment(props) {
  var dispatch = useDispatch()
    let totalPrice = 0

    useEffect(()=>{
        dispatch({
            type : "GET_CART"
        })
    },[])
  return (<div className='form-control container'>Proceed to Payment
    {props.cartitems.map((each, index)=>{
      totalPrice = totalPrice + each.quantity*each.price
       return (<>
       </>
         
       )

    })}
         <h3>total price : {totalPrice}</h3>
         <button className='btn btn-warning'> Pay </button>
    </div>
  )
}
export default connect(function(state, props){
  return{
      cartitems : state.cartitems||[]
}
}) (Payment)
