import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss'
import {connect} from 'react-redux'
import CartItem from '../cart-Item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {withRouter} from 'react-router-dom'


 const CartDropdown = ({cartItems, history, dispatch}) => (
      <div className="cart-dropdown">
      <div className="cart-items"> 
      { 
        cartItems.length ?
        cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
        )) :
        <span className="empty-message"> Your Cart is Empty</span> 
      }
      </div>
        <CustomButton onClick={()=> {
          history.push('/checkout');
          dispatch(toggleCartHidden());

        } }>GO TO CHECKOUT</CustomButton>      
      </div>
 );
 const mapStateToProps = (state) => ({
   cartItems: selectCartItems(state)
 })

 export default withRouter(connect(mapStateToProps)(CartDropdown));
