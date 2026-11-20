import CartProductGrid from "@/components/CartProductGrid";
import EmptyCart from "@/components/EmptyCart";
import { useCart } from "@/context/useCart";

const Cart = () => {
  const {cart} = useCart();

  return (
    <> 
      {cart.length >= 1 ? <CartProductGrid /> : <EmptyCart />}
    </>
  );
};

export default Cart;
