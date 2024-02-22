import { categoriesController } from "~/server/controllers";

export default defineEventHandler(async () => {
  const response = await categoriesController.readallCategories();
  return response;
});
