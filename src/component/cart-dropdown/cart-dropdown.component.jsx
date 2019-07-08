import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss'
import {connect} from 'react-redux'
import CartItem from '../cart-Item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector'


 const CartDropdown = ({cartItems}) => (
      <div className="cart-dropdown">
      <div className="cart-items"> 
      { cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
        ))}
      </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>      
      </div>
 );
 const mapStateToProps = (state) => ({
   cartItems: selectCartItems(state)
 })

 export default connect(mapStateToProps,null)(CartDropdown) ;
