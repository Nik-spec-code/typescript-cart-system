import type { ProductType } from "@/types/productType";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Trash } from "lucide-react";
import { useCart } from "@/context/useCart";

interface CartItemProps {
  product: ProductType;
}

const CartItem = ({ product }: CartItemProps) => {
  const { removeFromCart } = useCart();

  return (
    <Item
      className="items-stretch"
      key={product.id}
      variant={"outline"}
      role="listitem"
    >
      <ItemMedia className="h-28 w-28" variant={"image"}>
        <img
          className="hover:scale-[1.05] transition-all duration-300 ease-in-out"
          src={product.image}
          alt={product.name}
        />
      </ItemMedia>

      <ItemContent className="justify-between">
        <div className="space-y-1.5">
          <ItemTitle className="line-clamp-1 text-lg">{product.name}</ItemTitle>
          <ItemDescription className="line-clamp-1">
            {product.description}
          </ItemDescription>
        </div>

        <div>Inc/Dec</div>
      </ItemContent>

      <ItemContent className="justify-between items-end">
        <Trash
          onClick={() => removeFromCart(product.id)}
          className="cursor-pointer size-5.5 text-destructive"
          strokeWidth={2.5}
        />
        <ItemDescription className="text-foreground font-semibold">
          {product.price} Rs
        </ItemDescription>
      </ItemContent>
    </Item>
  );
};

export default CartItem;
