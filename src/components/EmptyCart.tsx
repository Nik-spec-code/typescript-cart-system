import { buttonVariants } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { PackageX } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="bg-background w-full px-14 py-8">
      <Empty>
        <EmptyHeader>
          <EmptyMedia  className="size-10" variant={"icon"}>
            <PackageX className="size-5.5" />
          </EmptyMedia>
          <EmptyTitle>No Products Yet</EmptyTitle>
          <EmptyDescription>
            You haven't added any products yet. Get started by adding your first
            product.
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent>
            <Link to={"/"} className={buttonVariants({variant: 'default', size: 'lg'})}>Add Products</Link>
        </EmptyContent>
      </Empty>
    </section>
  );
};

export default EmptyCart;
