import { CheerioAPI } from "cheerio";
import { ReadAllCategoriesResponse } from "./types";
import { CATEGORIES_URL } from "~/server/config/url";

export function NewController(cheerio: CheerioAPI) {
  async function readallCategories() {
    const html = await $fetch<string>(CATEGORIES_URL);
    const $ = cheerio.load(html);

    const response: ReadAllCategoriesResponse[] = [];

    $(`ul[aria-labelledby="categoryDropdown"]`).each((_index, element) => {
      $(element)
        .find(".dropdown-item")
        .each((_, categoryElement) => {
          const category = $(categoryElement).text();
          const href = $(categoryElement).attr("href");
          if (!href) {
            return;
          }

          const linkId = href.split("/")[3];

          response.push({
            id: linkId,
            name: category,
          });
        });
    });

    return response;
  }

  return {
    readallCategories,
  };
}
