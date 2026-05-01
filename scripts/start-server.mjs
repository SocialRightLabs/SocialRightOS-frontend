import { existsSync } from "node:fs";

const hostname = process.env.HOSTNAME ?? "0.0.0.0";
const port = process.env.PORT ?? "3000";

process.env.HOSTNAME = hostname;
process.env.PORT = port;

const standaloneServer = new URL("../.next/standalone/server.js", import.meta.url);

if (!existsSync(standaloneServer)) {
  throw new Error("Standalone server not found. Run `npm run build` before starting the app.");
}

await import(standaloneServer.href);
