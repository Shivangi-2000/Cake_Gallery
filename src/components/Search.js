import { useSearchParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import Cake from "./Cake"
import Loader from "./Loader"
function Search() {
    var [query, setQuery] = useSearchParams()
    var [results, setResults] = useState([])
    var [loading, setLoading] = useState(false)
    var searchtext = query.get("q")



    useEffect(() => {
        setLoading(true)
        axios({
            url: "https://apifromashu.herokuapp.com/api/searchcakes?q=" + searchtext,
            method: "get"
        }).then((response) => {
            console.log("Response from search cakes api", response.data)
            setResults(response.data.data)
            setLoading(false)
        } , (error)=>{
            setLoading(false)
        })
    },[searchtext])

    return (<div>
        <div class="row">
            <h3>{results.length} cakes found for your search !!</h3>
            {results.map((each, index) => {
                return <Cake data={each} key={index} />
            })}
            <Loader loading={loading} />
        </div>

    </div>)
}

export default Search