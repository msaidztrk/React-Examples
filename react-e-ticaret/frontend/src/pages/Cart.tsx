import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => { 

    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    

  
    useEffect(() => {
      dispatch(getCartTotal());
    }, [dispatch]); 
    
  return (
    <div>Cart</div>
  )
}

export default Cart