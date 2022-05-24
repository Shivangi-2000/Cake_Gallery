import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar(){
    let projectname = "Shivi's Cake Gallery"
    var [searchtext,setSearchtext] =  useState("")
    //var likes =103

   
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
          {/*likes*/}
        <input onChange={getText} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
       <Link to={`/search?q=${searchtext}`}><button class="btn btn-outline-success" type="button">Search</button> </Link>
      </form>
      </ul>
      <form class="d-flex">
       <Link to="/login"> <button class="btn btn-primary" type="submit">Login</button> </Link>
      </form>
    </div>
  </div>
</nav>
    )
}
export default Navbar



