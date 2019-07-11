import React from 'react'
import {connect} from 'react-redux'
import './checkout.styles.scss'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import StripeButton from '../../component/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>   
        </div>
            {
                cartItems.map(cartItem => {
                  return  <CheckoutItem key={cartItem.id}  cartItem={cartItem}/>
                })
            }
            <div className="total">Total: ${cartTotal}</div>
            <div className="test-warning">
            *Please use the following test credit care for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            
            </div>
            <StripeButton price={cartTotal}/>
            
    </div>

);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps, null) (CheckoutPage);