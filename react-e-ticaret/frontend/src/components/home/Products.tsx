import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice';

const Products = () => { 


  const dispatch = useDispatch(); 

  const {products , productsStatus} = useSelector( (state: { products: any; }) => state.products); 

  console.log('products : ',products);

  useEffect(()=> {
      dispatch(getProducts())
  } , [dispatch])

  return (
    <div>Products</div>
  )
}

export default Products