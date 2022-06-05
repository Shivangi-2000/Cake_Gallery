import { Link } from "react-router-dom"
import { useState } from "react"
import { connect } from "react-redux"

function Navbar(props){
    let projectname = "Cake Gallery"
    var [searchtext,setSearchtext] =  useState("")
    function logout(){
      localStorage.clear()
      window.location.href = "/"
    }

   
    function getText(e){
            console.log("event hppening" , e.target.value)
            setSearchtext(e.target.value)
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
<Link class="navbar-brand" to="/">{projectname}</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <form class="d-flex">
         
        <input onChange={getText} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
       <Link to={`/search?q=${searchtext}`}><button class="btn btn-outline-success" type="button">Search</button> </Link>
      </form>
      </ul>
      <form class="d-flex">
       {!props.isloggedin && <Link to="/login"> <button class="btn btn-primary" type="submit">Login</button> </Link>}
       {props.isloggedin && <Link to="/cart"> <button class="btn btn-primary" type="submit">Cart</button> </Link>}
       {props.isloggedin &&  <button onClick = {logout} class="btn btn-primary" type="submit">Loginout</button> }

      </form>
    </div>
  </div>
</nav>
    )
}
export default connect(function(state, props){ //connect fuction to connect with reducers
  return {
    isloggedin : state.isloggedin //assign value of isloggedin from reducer.js
  }
}) (Navbar)



