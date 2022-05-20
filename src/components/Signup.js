import { Component } from "react";
import axios from "axios";
import Loader from "./Loader";

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            loading:false
        }
    }
    user = {}



    getEmail = (e) => {
        this.user.email = e.target.value
    }
    getName = (e) => {
        this.user.name = e.target.value
    }
    getPassword = (e) => {
        this.user.password = e.target.value
    }
    signup = () => {
        this.setState({
            error: null,
            loading:true
        })
        console.log("this user", this.user)
        axios({
            url: "https://apifromashu.herokuapp.com/api/register",
            method: "post",
            data: this.user
        }).then((response) => {
            
            console.log("Response from signup api", response.data)
            if (response.data.message == "User Already Exists") {
                this.setState({
                    loading:false,
                    error: "This Email is already taken! Try another!"
                })
            }
            else {
                this.setState({
                    loading:false,
                    registeredsuccess: true
                })
            }
        }, (error) => {
            this.setState({
                loading:false,
                error:"Some Internal Server Error"
            })
            console.log("Error from signup api", error)
        })
    }
    render() {
        if(!this.state.registeredsuccess){
            return    <div style={{ margin: "auto", width: "50%" }} className="container">

            <div style={{ margin: 'auto' }} class="col-md-6">
            <h1>Signup Here</h1>

            <input class="mt-3 form-control" onChange={this.getEmail} placeholder="Email"></input>
            {this.state.error && <div style={{ color: "red" }}>
                <label>{this.state?.error}</label>
            </div>}
            <input class=" mt-3 form-control" onChange={this.getName} placeholder="Name"></input>
            <input type="password" class="mt-3 form-control" onChange={this.getPassword} placeholder="Password"></input>
            <button class="mt-3 btn btn-primary" onClick={this.signup}>Signup</button>
            <Loader loading={this.state.loading} />

        </div>
        </div>
        }
        else{
            return    <div style={{ margin: "auto", width: "50%" }} className="container">
             
            <div style={{ margin: 'auto' }} class="col-md-6">
               <h3>Registeration Success! A Verification email is sent tou your registered email id. Please Verify your account to login</h3>
           </div>

       </div>
        }
      
    }
}

export default Signup