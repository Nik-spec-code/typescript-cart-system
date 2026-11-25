import { Button, buttonVariants } from "@/components/ui/button";
import { useCart } from "@/context/useCart";
import type { ProductType } from "@/types/productType";

interface QtyControlBtnProps {
  product: ProductType;
}

const QtyControlBtn = ({ product }: QtyControlBtnProps) => {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="flex items-center">
      <Button
        onClick={() => decreaseQuantity(product.id, product.quantity)}
        className={`rounded-l-full text-base active:scale-95 active:transition-transform active:duration-0 ${product.quantity <= 1 && "opacity-50"}`}
        size={"sm"}
      >
        -
      </Button>
      <span
        className={`${buttonVariants({ size: "sm", variant: "secondary" })} rounded-none select-none hover:bg-secondary`}
      >
        {product.quantity}
      </span>
      <Button
        onClick={() => increaseQuantity(product.id)}
        className="rounded-r-full text-base active:scale-95 active:transition-transform active:duration-0"
        size={"sm"}
      >
        +
      </Button>
    </div>
  );
};

export default QtyControlBtn;
