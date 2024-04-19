import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

interface productDetail {
  id: any;
  rating: {
    rate: number;
    count: number;
  };
  count: number;
  price: string;
  image: string;
  title: string;
  description: string;
}

interface DetailCompProps {
  productDetail: productDetail;
}

const DetailComp = ({ productDetail }: DetailCompProps) => {

  const dispatch = useDispatch();
   
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increment = () => {
    if ( productDetail?.rating?.count > quantity)
    setQuantity(quantity + 1);
  }; 

  const addBasket = () => {

    console.log(productDetail?.title , quantity);

    dispatch(addToCart(productDetail))
    
  }

  return (
    <div className="flex gap-10 my-10">
      <img
        src={productDetail?.image}
        alt=""
        className="w-[700px] h-[500px] object-cover"
      />
      <div className="">
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2 text-2xl">{productDetail?.description}</div>
        <div className="my-2 text-xl text-red-500">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-500">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="text-3xl font-bold">
          Count : {productDetail?.price} <span className="text-sm">TL</span>
        </div>

        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="text-5xl cursor-pointer">
            -
          </div>
          <input
            className="w-13 text-center text-4xl font-bold"
            type="text"
            value={quantity}
            disabled
            readOnly
          />
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>

        <div onClick={addBasket} className="border w-[200px] h-16 flex items-center justify-center text-2xl rounded-md bg-gray-200 cursor-pointer my-3">
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
