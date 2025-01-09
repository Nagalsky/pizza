"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes?: string;
  sizes?: string;
  ingredients?: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  ingredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number | undefined) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getParamSet = useCallback(
    (key: string): Set<string> => {
      const param = searchParams.get(key);
      if (!param) return new Set();
      return new Set(param.split(",").filter(Boolean));
    },
    [searchParams],
  );

  const sizesRef = React.useRef(getParamSet("sizes"));
  const pizzaTypesRef = React.useRef(getParamSet("pizzaTypes"));
  const ingredientsRef = React.useRef(getParamSet("ingredients"));

  const [sizes, setSizes] = React.useState<Set<string>>(sizesRef.current);
  const [pizzaTypes, setPizzaTypes] = React.useState<Set<string>>(
    pizzaTypesRef.current,
  );
  const [ingredients, setSelectedIngredients] = React.useState<Set<string>>(
    ingredientsRef.current,
  );
  const [prices, setPricesState] = React.useState<PriceProps>({
    priceFrom: searchParams.get("priceFrom")
      ? Number(searchParams.get("priceFrom"))
      : undefined,
    priceTo: searchParams.get("priceTo")
      ? Number(searchParams.get("priceTo"))
      : undefined,
  });

  React.useEffect(() => {
    const ingredientsFromUrl = getParamSet("ingredients");
    const sizesFromUrl = getParamSet("sizes");
    const pizzaTypesFromUrl = getParamSet("pizzaTypes");

    if (ingredientsFromUrl.size > 0) {
      ingredientsRef.current = ingredientsFromUrl;
      setSelectedIngredients(ingredientsFromUrl);
    }
    if (sizesFromUrl.size > 0) {
      sizesRef.current = sizesFromUrl;
      setSizes(sizesFromUrl);
    }
    if (pizzaTypesFromUrl.size > 0) {
      pizzaTypesRef.current = pizzaTypesFromUrl;
      setPizzaTypes(pizzaTypesFromUrl);
    }
  }, [searchParams, getParamSet]);

  const updateQueryParams = React.useCallback(
    (updates: Partial<QueryFilters>) => {
      const newParams = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value !== undefined && value !== "" && value !== 0) {
          newParams.set(key, value.toString());
        } else {
          newParams.delete(key);
        }
      });

      setTimeout(() => {
        router.push(`?${newParams.toString()}`, { scroll: false });
      }, 0);
    },
    [searchParams, router],
  );

  const toggleSetValue = React.useCallback(
    (
      setName: "pizzaTypes" | "sizes" | "ingredients",
      currentSet: Set<string>,
      setValue: React.Dispatch<React.SetStateAction<Set<string>>>,
      value: string,
      ref: React.MutableRefObject<Set<string>>,
    ) => {
      const newSet = new Set(currentSet);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }

      ref.current = newSet;
      setValue(newSet);

      const queryValue = Array.from(newSet).join(",");
      if (queryValue) {
        updateQueryParams({ [setName]: queryValue });
      } else {
        updateQueryParams({ [setName]: undefined });
      }
    },
    [updateQueryParams],
  );

  const handleSetPizzaTypes = React.useCallback(
    (value: string) => {
      toggleSetValue(
        "pizzaTypes",
        pizzaTypes,
        setPizzaTypes,
        value,
        pizzaTypesRef,
      );
    },
    [pizzaTypes, toggleSetValue],
  );

  const handleSetSizes = React.useCallback(
    (value: string) => {
      toggleSetValue("sizes", sizes, setSizes, value, sizesRef);
    },
    [sizes, toggleSetValue],
  );

  const handleSetIngredients = React.useCallback(
    (value: string) => {
      toggleSetValue(
        "ingredients",
        ingredients,
        setSelectedIngredients,
        value,
        ingredientsRef,
      );
    },
    [ingredients, toggleSetValue],
  );

  const setPrices = React.useCallback(
    (name: keyof PriceProps, value: number | undefined) => {
      setPricesState((prev) => {
        const updatedPrices = { ...prev, [name]: value };

        updateQueryParams({
          priceFrom: updatedPrices.priceFrom,
          priceTo: updatedPrices.priceTo,
        });

        return updatedPrices;
      });
    },
    [updateQueryParams],
  );

  return React.useMemo(
    () => ({
      sizes,
      pizzaTypes,
      ingredients,
      prices,
      setPrices,
      setPizzaTypes: handleSetPizzaTypes,
      setSizes: handleSetSizes,
      setSelectedIngredients: handleSetIngredients,
    }),
    [
      sizes,
      pizzaTypes,
      ingredients,
      prices,
      setPrices,
      handleSetPizzaTypes,
      handleSetSizes,
      handleSetIngredients,
    ],
  );
};
