import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const ProductCard = () => {
  return (
    <Card className="max-w-sm pt-0 m-10">
      <div className="rounded-b-none overflow-hidden w-full">
        <img
          className="w-full aspect-video object-cover hover:scale-[1.05] transition-all duration-300 ease-in-out"
          src="https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="sofa"
        />
      </div>

      <CardHeader>
        <CardTitle>Sofa</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni
          adipisci nisi...
        </CardDescription>
        <div className="mt-2 font-bold text-foreground">25000 Rs</div>
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
