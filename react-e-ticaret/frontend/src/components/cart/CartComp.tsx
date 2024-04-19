import React from "react";

interface cartProps {
  cart :CartArray

} 


interface CartArray {
 quantity : number 
 image : string
 title  :string
 description : string
 price : number
}

const CartComp = ({ cart }: cartProps) => {
  return <div className="my-5 flex items-center justify-between">
    <img className="w-[150px] h-[150px] object-cover" src={cart.image} alt="" />
    <div>
      <div className="text-3xl font-bold">{cart.title}</div>
      <div>{cart.description}</div>
    </div>
    <div>{cart.price} TL ({cart.quantity})</div>
    <div className="bg-red-500 text-white w-[150px] cursor-pointer rounded-md text-2xl h-16 flex items-center justify-center">Urunu Sil</div>
  </div>;
};

export default CartComp;
