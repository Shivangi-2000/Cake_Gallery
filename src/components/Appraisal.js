import { useState, useEffect } from "react"

function Appraisal(){
    var [salary,setSalary] = useState(10000)
    var [likes,setLikes] = useState(0)
    useEffect(()=>{
        alert("Hi There!!")
    }, []) // list of dependencies 
    function like(){
        setLikes(likes+1)
    }
    function discussion(){
        setSalary(salary+1000)
    }
    return (
        <div>
            My salary is {salary} <br></br>
            {likes}
            <button onClick={discussion}>Discussion</button>
            <button onClick={like}>Like</button>
        </div>
    )
}
export default Appraisal