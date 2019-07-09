import {CartActionTypes} from './cart.actionTypes'
import {addItemsToCart,clearItemsFromCart,removeItemsFromCart} from './cart.utils'
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
            return {
                ...state,
                hidden: !state.hidden
            };

        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemsToCart(state.cartItems, action.payload)
            };

            case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: clearItemsFromCart(state.cartItems, action.payload)
            };
            case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemsFromCart(state.cartItems, action.payload)
            };
        default:
        return state;
    }

};

export default cartReducer;