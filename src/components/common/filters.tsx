"use client";
import { useFilters, useIngredients } from "@/hooks";
import React from "react";
import { CheckboxFiltersGroup, RangeSlider, Title } from ".";
import { Input } from "../ui";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  const items = React.useMemo(
    () =>
      ingredients.map((item) => ({
        value: String(item.id),
        text: item.name,
      })),
    [ingredients],
  );

  const handleInputChange = React.useCallback(
    (name: "priceFrom" | "priceTo", value: string) => {
      const numValue = value === "" ? undefined : Number(value);
      filters.setPrices(name, numValue);
    },
    [filters],
  );

  const updatePrices = React.useCallback(
    (prices: number[]) => {
      const [from, to] = prices;
      if (from !== filters.prices.priceFrom) {
        filters.setPrices("priceFrom", from || undefined);
      }
      if (to !== filters.prices.priceTo) {
        filters.setPrices("priceTo", to || undefined);
      }
    },
    [filters],
  );

  return (
    <div className={className}>
      <Title size="sm" className="mb-5 font-bold">
        Фильтрация
      </Title>

      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={filters.prices.priceFrom?.toString() || ""}
            onChange={(e) => handleInputChange("priceFrom", e.target.value)}
          />
          <Input
            type="number"
            min={0}
            max={1000}
            placeholder="1000"
            value={filters.prices.priceTo?.toString() || ""}
            onChange={(e) => handleInputChange("priceTo", e.target.value)}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.ingredients}
      />
    </div>
  );
};
