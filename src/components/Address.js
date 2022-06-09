import React from 'react'

export default function Address() {
  var userDtails = {}


      function getName(e){
          userDtails.name = e.target.value

      }
      function getAddress(e){
        userDtails.address = e.target.value
      }
      function getArea(e){
        userDtails.area = e.target.value

      }
      function getCity(e){
      userDtails.city = e.target.value
      }
      function getPincode(e){
        userDtails.pincode = e.target.value

      }
      function getPhoneNo(e){
      userDtails.phoneno = e.target.value
      }


  return (
    <div className='form-control'><br></br>
     <h3>Add address</h3>
      <div class="form-control mb-3">
    <label for="exampleFormControlInput1" onChange={getName} class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
  </div>
  <div class="form-control mb-3">
    <label for="exampleFormControlTextarea1" onChange={getAddress} class="form-label">Address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your address" />
  </div>
  <div class="form-control mb-3">
    <label for="exampleFormControlTextarea1" onChange={getArea} class="form-label">Area</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your area" />
  </div>
  <div class="form-control mb-3">
    <label for="exampleFormControlTextarea1" onChange={getCity} class="form-label">City</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your City" />
  </div>
  <div class="form-control mb-3">
    <label for="exampleFormControlTextarea1" onChange={getPincode} class="form-label">Pincode</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your pincode" />
  </div>
  <div class="form-control mb-3">
    <label for="exampleFormControlTextarea1" onChange={getPhoneNo} class="form-label">Phone No:</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your phone no" />
  </div>
  <button className='btn btn-warning'>Add address</button>
  </div>
  
  )
}
