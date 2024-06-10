import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSucure";
import UseCart from "../../hooks/UseCart";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError]=useState("");
    const [clientSecret,setClientSecret]=useState("")
    const axiosSecure=UseAxiosSecure()
    const [carts,refetch,totalPrice]=UseCart();
    const {user}=UseAuth()
    const navigate=useNavigate()

useEffect(()=>{
   axiosSecure.post('/create-payment-intent',{price:totalPrice})
  .then(res=>{
    console.log(res.data.clientSecret);
    setClientSecret(res.data.clientSecret)
  })
},[axiosSecure,totalPrice])




    const handleSubmit= async(e)=>{
      e.preventDefault()

      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
      const card = elements.getElement(CardElement);
      if (card == null) {
        return;
      }
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if (error) {
        console.log("payment error",error);
        setError(error.message)
      }
      else{
        console.log("payment method",paymentMethod);
        setError("")
      }
      // payment
      const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
          card: card,
          billing_details:{
            email:user?.email,
            name:user?.displayName || "anoymous"
          }
        }
      })
      if (confirmError) {
        console.log("confirmerror",confirmError);
      }
      else{
        console.log("paymentIntent",paymentIntent);
        if (paymentIntent.status==="succeeded") {
          navigate("/invoice")
        }
      }
      
    }
    return (
      <form onSubmit={handleSubmit} >
           <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn bg-primary text-white" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      </form>
    );
};

export default CheckOutForm;