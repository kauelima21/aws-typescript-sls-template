import { formatJSONResponse } from "@lib/json-response";
import { APIGatewayEvent } from "aws-lambda";

async function hello(event: APIGatewayEvent) {
  console.log(event);
  return formatJSONResponse(200, {
    message: "Hello from lambda"
  });
}

export const handler = hello;
