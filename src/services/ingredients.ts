import { Ingredient } from "@prisma/client";
import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instance";

export const getAll = async (): Promise<Ingredient[]> => {
  const response = await axiosInstance.get<{ ingredients: Ingredient[] }>(
    ApiRoutes.INGREDIENTS,
  );
  return response.data.ingredients;
};
