import axios from 'axios'
import {takeEvery, all, put} from  'redux-saga/effects'


function *CartGenerator(){
    console.log("Here we will make the api call and further dispatch action")
    var response
    response =yield axios({
        url : "https://apifromashu.herokuapp.com/api/cakecart",
        data : {},
        method : "POST",
        headers : {
            authtoken : localStorage.token
        }
    })
    if(response.data){
        console.log("result from cake cart api", response)
        yield put({
            type : "GET_CART_SUCCESS",
            payload : response.data.data
        })
    }
}

function *CartSaga(){
    
    yield takeEvery('GET_CART', CartGenerator)
}

export function *RootSaga(){
    
    yield all([CartSaga()])
}