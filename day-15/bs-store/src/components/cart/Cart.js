import React, { useEffect, useState } from 'react'
import AppContext from '../../context/AppContext';
import { useContext } from 'react';


export default function Cart() {
  const {carts} = useContext(AppContext);
 
 
  return (
    <div>
      {
        carts.map((cart,index) => <p key={index}>{cart.title}</p>)
      }
    </div>
  )
}
