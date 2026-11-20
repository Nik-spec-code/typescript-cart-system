import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { ItemGroup } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/useCart";
import { ArrowRight } from "lucide-react";

const CartProductGrid = () => {
  const { cart } = useCart();
  const deliveryFee = 500;

  const subtotal: number = cart.reduce(
    (acc, prod) => acc + prod.price * prod.quantity,
    0,
  );

  return (
    <section className="relative bg-background w-full px-14 py-8 grid grid-cols-4">
      {/* Cart Product List */}
      <div className="h-fit px-4 pt-3 pb-6 mr-10 col-span-3 rounded-lg border-[0.1px] border-border">
        <h2 className="text-xl text-foreground mb-5 font-semibold">
          Cart Products
        </h2>

        {/* Items Container */}
        <ItemGroup className="gap-4">
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ItemGroup>
      </div>

      {/* Order Summary */}
      <div className="px-4 py-3 rounded-lg border-[0.1px] border-border h-fit sticky top-8">
        <h2 className="text-xl text-foreground mb-5 font-semibold">
          Order Summary
        </h2>

        {/* Cart Calculation */}
        <ul className="space-y-4 mb-4">
          <li className="flex items-center justify-between text-sm">
            <h4>Subtotal</h4>
            <span>{subtotal} Rs</span>
          </li>
          <li className="flex items-center justify-between text-sm">
            <h4>Discount</h4>
            <span>00 Rs</span>
          </li>
          <li className="flex items-center justify-between text-sm">
            <h4>Delivery Fee</h4>
            <span>{deliveryFee} Rs</span>
          </li>
        </ul>

        <Separator className="mb-4" />

        {/* Total Amount */}
        <div className="flex items-center justify-between mb-10">
          <h4>Total</h4>
          <span className="text-lg">{subtotal + deliveryFee} Rs</span>
        </div>

        <Button className="w-full py-6 rounded-full">
          Go to Chekcout <ArrowRight className="size-5 ml-1" />
        </Button>
      </div>
    </section>
  );
};

export default CartProductGrid;
