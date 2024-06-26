import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { carts, totalAmount, itemCount } = useSelector(
    (state: any) => state.carts
  );

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart: any, i: any) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl">TOPLAM TUTAR : <span className="font-bold text-3xl ml-2"> {totalAmount} TL</span> </div>
        </div>
      ) : (
        <div>Kartiniz Bos...</div>
      )}
    </div>
  );
};

export default Cart;
