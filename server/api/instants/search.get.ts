import * as cheerio from "cheerio";

const BASE_URL = "https://www.myinstants.com";
const SEARCH_URL = `${BASE_URL}/search/`;

interface ReadAllResponse {
  title: string;
  audioUrl: string;
}

export default defineEventHandler(async (event) => {
  const { q } = getQuery(event);
  if (!q) {
    throw createError({
      status: 400,
      statusMessage: "search term `q` not provided",
    });
  }

  const html = await $fetch<string>(`${SEARCH_URL}?name=${q}`);
  const $ = cheerio.load(html);

  const response: ReadAllResponse[] = [];

  $(".instant").each((_index, element) => {
    const title = $(element).children(".instant-link").text();
    const audio = $(element).children(".small-button").attr("onclick");

    if (!audio) {
      return;
    }

    const [, audioUrl] = audio.split("'");

    response.push({
      title,
      audioUrl: `${BASE_URL}${audioUrl}`,
    });
  });

  return response;
});
