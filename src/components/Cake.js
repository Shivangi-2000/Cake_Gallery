import { Link } from "react-router-dom"

function Cake(props) {
   var data =  props.data
   if(props.data)
    return (
        <div class="card" style={{ width: "18rem" , border:"none"}}>
          <Link to={`/detail/${data.cakeid}`}> <img style={{height:"16rem"}}  src={data?.image} class="img-thumbnail card-img-top" alt="..." /></Link> 
            <div class="card-body">
                <h5 class="card-title">{data?.name}</h5>
                <p class="card-text">{data?.price}</p>
            </div>
        </div>
    )
    else{
        return null
    }
}

export default Cake