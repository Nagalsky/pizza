import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { Title } from "./title";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: any[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex h-[260px] justify-center rounded-lg bg-secondary p-6">
          <Image
            className="h-[215px] w-[215px] object-cover"
            width={100}
            height={100}
            src={imageUrl}
            alt={name}
          />
        </div>

        <Title size="sm" className="mb-1 mt-3 font-bold">
          {name}
        </Title>

        <p className="text-sm text-gray-400">
          {/* {ingredients.map((ingredient) => ingredient.name).join(", ")} */}
          Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
