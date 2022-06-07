export var Shivi = function(state = {
    isloggedin : localStorage.token?true:false,
    cakes : [],
    cartitems : []
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

        case "GET_CART_SUCCESS":{
            state = {...state}
            state.cartitems = action.payload
            return state
        }

        default : return state

    }
}