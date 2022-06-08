import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

export default function Checkout() {
  return (
    <div className='row'>
        <div className='col-md-4'>
            <ul class="nav flex-column">
                
                <li class="nav-item">
                    <Link to="summary" className='nav-link' >Summary</Link>
                </li>
                <li class="nav-item">
                    <Link to="address"  className='nav-link'>Address</Link>
                </li>
                <li class="nav-item">
                    <Link to="payment"  className='nav-link'>Payment</Link>
                </li>
            </ul>

        </div>
        <div className='col-md-8'>
            <Outlet></Outlet>

        </div>
    </div>
  )
}
