"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store";
import React from "react";
import { useIntersection } from "react-use";
import { ProductCard } from "./product-card";
import { Title } from "./title";

interface Props {
  title: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const { setActiveId } = useCategoryStore((state) => state);
  const intersectionRef = React.useRef<HTMLDivElement>(
    null as unknown as HTMLDivElement,
  );
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveId, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title size="lg" className="mb-5 font-extrabold">
        {title}
      </Title>

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
