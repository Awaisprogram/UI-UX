import React from 'react'
import Navbar from '../components/Navbar'
import CartTop from '../components/CartTop'
import Quick from '../components/Quick'
import Best from '../components/BestSeller'
import Sponser from '../components/Sponser'

function Cart() {
  return (
    <>
      <Navbar/>
      <CartTop/>
      <Quick/>
      <Best/>
      <Sponser/>
    </>
  )
}

export default Cart
