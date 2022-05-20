import { Link } from "react-router-dom"

function Login(){

    function getEmail(){

    }
    function getPassword(){
        
    }

    function login(){

    }
    return (
        <div style={{ margin: "auto", width: "50%" }} className="container">
        <div style={{margin:'auto'}} class="mt-5 col-md-6">
        <h1>Login Here</h1>
            <input class="mt-3 form-control" onChange={getEmail} placeholder="Email"></input>
            <input class="mt-3 form-control" onChange={getPassword} placeholder="Password"></input>
            <div>
                <Link to="/signup">New User? Signup Here</Link>
            </div>
            <button class="mt-3 btn btn-primary" onClick={login}>Login</button>
        </div>

    </div>
    )
}

export default Login