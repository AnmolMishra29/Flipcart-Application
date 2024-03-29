import axios from "axios"
import * as actionType from '../constants/cartConstants'

const URL = 'http://localhost:8600'


export const addToCart = (id, quantity)=> async(dispatch) => {
   try{
       const { data } =await axios.post(`${URL}/product`,{id:id});
       dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity }})
   }
   catch(error){
    dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message })
   }
}

export const RemoveFromCart = (id)=> (dispatch) => {
    dispatch({ type: actionType.REMOVE_FROM_CART, payload: id})
} 