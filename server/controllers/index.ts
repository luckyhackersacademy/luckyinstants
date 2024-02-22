import cheerio from "cheerio";

import { NewController as NewInstantsController } from "./instants";
import { NewController as NewCategoriesController } from "./categories";

export const instantsController = NewInstantsController(cheerio);
export const categoriesController = NewCategoriesController(cheerio);
