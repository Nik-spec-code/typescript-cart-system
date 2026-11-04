import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  return (
    <div className="relative cursor-pointer">
      <ShoppingCart
        className="size-5.75 text-primary-foreground"
        strokeWidth={3}
      />
      <div className="absolute -right-3.5 -top-3 h-5 w-5 rounded-full font-semibold bg-destructive flex items-center justify-center text-xs text-primary-foreground">
        0
      </div>
    </div>
  );
};

export default CartIcon;
