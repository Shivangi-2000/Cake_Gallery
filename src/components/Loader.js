function Loader(props){
    if(props.loading){
        return <div class="overlay">
        <img style={{position: "absolute", right: "600px", height: "100px", top: "290px", "z-index": 100}}  src="loader.gif" ></img>
    </div>
    }
    else{
        return null
    }
    
}

export default  Loader