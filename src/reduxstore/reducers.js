export var Shivi = function(state = {
    isloggedin : localStorage.token?true:false,
    cakes : []
}, action){
    switch(action.type){
        case "LOGIN" :{
            state = {...state}
            state.isloggedin = true
            return state
        }
        case "INITIALISE_CAKES":{
            state = {...state}
            state.cakes = action.payload
            return state
        }

        default : return state

    }
}