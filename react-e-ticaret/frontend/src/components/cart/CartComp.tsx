import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

interface cartProps {
  cart :CartArray

} 


interface CartArray {
  id: number
 quantity : number 
 image : string
 title  :string
 description : string
 price : number
}

const CartComp = ({ cart }: cartProps) => { 


  const dispatch = useDispatch();


  return <div className="my-5 flex items-center justify-between">
    <img className="w-[150px] h-[150px] object-cover" src={cart.image} alt="" />
    <div className="w-[476px] ">
      <div className="text-xl">{cart.title}</div>
      <div>{cart.description}</div>
    </div>
    <div className="font-bold text-2xl">{cart.price} TL ({cart.quantity})</div>
    <div onClick={()=> dispatch(removeFromCart(cart?.id))} className="bg-red-500 text-white w-[150px] cursor-pointer rounded-md text-2xl h-16 flex items-center justify-center">Urunu Sil</div>
  </div>;
};

export default CartComp;
