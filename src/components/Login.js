import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate} from "react-router-dom"
import Loader from "./Loader"

function Login(){
    var user ={}
    var [loading, setLoading] = useState(false)
    var [error, setError] = useState(null)
    var navigate = useNavigate()
    var dispatch = useDispatch()
    function getEmail(e){
        user.email = e.target.value

    }
    function getPassword(e){
        user.password = e.target.value
    }

    function login(){
        setLoading(true)
        axios({
            url:"https://apifromashu.herokuapp.com/api/login",
            method:"post",
            data:user
        }).then((response)=>{
            setLoading(false)
            console.log("response from login api", response.data)
            if(response.data.token){
                localStorage.token = response.data.token
                dispatch({
                    type : "LOGIN" //dispatch to reducers
                })
                navigate("/")
                setLoading(false)
            }
            else{
                setLoading(false)
                setError("Invalid Credentials")
            }
        },(error)=>{
            setLoading(false)
            console.log("error from login api", error)
        })
          
    }
    return (
        <div style={{ margin: "auto", width: "50%" }} className="container">
        <div style={{margin:'auto'}} class="mt-5 col-md-6">
        <h1>Login Here</h1>
            <input class="mt-3 form-control" onChange={getEmail} placeholder="Email"></input>
            <input type = "password" class="mt-3 form-control" onChange={getPassword} placeholder="Password"></input>
            {error && <div className="alert alert-danger">
                {error}
               </div>}
            <div>
                <Link to="/signup">New User? Signup Here</Link>
            </div>
            <button class="mt-3 btn btn-primary" onClick={login}>Login</button>
            <Loader loading = {loading} />
        </div>

    </div>
    )
}

export default Login