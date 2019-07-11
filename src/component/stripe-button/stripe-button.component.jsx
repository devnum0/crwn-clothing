import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeButton = ({price}) => {
const totalAmount = price * 100;
const publishableKey ='pk_test_w4KEC5qV7w05FL5WkFq0S0fG008pIAObFh';

const onToken = token => {
    console.log(token);
    alert('Payment Successful')
}
return (

    <StripeCheckout 
    stripeKey={publishableKey}
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={totalAmount}
    panelLabel='Pay Now'
    token={onToken}
    />
)

}


export default StripeButton; 