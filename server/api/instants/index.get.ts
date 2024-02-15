import * as cheerio from "cheerio";

const BASE_URL = "https://www.myinstants.com";
const READ_ALL_URL = `${BASE_URL}/en/index/br/`;

interface ReadAllResponse {
  title: string;
  audioUrl: string;
}

export default defineEventHandler(async () => {
  const html = await $fetch<string>(READ_ALL_URL);
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
