import { instantsController } from "~/server/controllers";

export default defineEventHandler(async () => {
  const response = await instantsController.recent();
  return response;
});
