import { useCart } from "@/context/useCart";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { cart } = useCart();

  return (
    <Link to={"cart"} className="relative cursor-pointer">
      <ShoppingCart
        className="size-5.75 text-primary-foreground"
        strokeWidth={3}
      />
      <div className="absolute -right-3.5 -top-3 h-5 w-5 rounded-full font-semibold bg-destructive flex items-center justify-center text-xs text-primary-foreground">
        {cart.length}
      </div>
    </Link>
  );
};

export default CartIcon;
