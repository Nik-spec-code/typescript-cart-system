import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProductType } from "@/types/productType";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="w-full pt-0">
      <div className="rounded-b-none overflow-hidden w-full">
        <img
          className="w-full aspect-video object-cover hover:scale-[1.05] transition-all duration-300 ease-in-out"
          src={product.image}
          alt={product.name}
        />
      </div>

      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>
          {product?.description.length <= 77
            ? product.description
            : product.description.slice(0, 77)}
        </CardDescription>
        <div className="mt-2 font-bold text-foreground">{product.price} Rs</div>
      </CardHeader>

      <CardFooter>
        <Button className="w-full">
          <ShoppingCart className="mr-2" strokeWidth={3} /> Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
