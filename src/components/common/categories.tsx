"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store";
import React from "react";

interface Props {
  className?: string;
}

const categories = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Завтраки" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Десерты" },
  { id: 5, name: "Соусы" },
  { id: 6, name: "Салаты" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const { activeId } = useCategoryStore((state) => state);
  React.useEffect(() => {
    const applyScrollMargin = () => {
      categories.forEach(({ name }) => {
        const element = document.getElementById(name);
        if (element) {
          element.style.scrollMarginTop = "100px";
        }
      });
    };

    applyScrollMargin();
  }, []);
  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {categories.map(({ id, name }) => (
        <a
          key={id}
          href={`#${name}`}
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            activeId === id &&
              "bg-white text-primary shadow-md shadow-gray-200",
          )}
        >
          {name}
        </a>
      ))}
    </div>
  );
};
