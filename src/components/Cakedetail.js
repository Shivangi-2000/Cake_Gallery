import { useParams } from "react-router"

function Cakedetail(){
    var params =  useParams()
    return (
        <div>
            Here we will show details of cake {params.cakeid}
        </div>
    )
}

export default Cakedetail