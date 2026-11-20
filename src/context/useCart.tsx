import type { ProductType } from "@/types/productType";
import React, { createContext, useContext, useEffect, useState } from "react";
import { products } from "@/dummy_data/productList";

interface CartContextProviderProps {
  children: React.ReactNode;
}

interface CartContextType {
  cart: ProductType[];
  addToCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

// CartContext Provider
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ProductType[]>(() => {
    const savedProducts = localStorage.getItem("cartList");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  //   Add To Cart
  function addToCart(id: string): void {
    const product: ProductType | undefined = products.find(
      (prod) => id === prod.id,
    );

    if (product) {
      const productInCart: ProductType | undefined = cart.find(
        (prod) => prod.id === product.id,
      );
      if (productInCart) {
        setCart((prevCart) =>
          prevCart.map((prod) =>
            prod.id !== product.id
              ? prod
              : { ...prod, quantity: prod.quantity + 1 },
          ),
        );
      } else {
        setCart((prevCart) => [...prevCart, product]);
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// useCart hook
export function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
}
