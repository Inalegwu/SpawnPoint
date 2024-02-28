const v = require("valibot");
const path = require("path");

// determine the application environment
const APP_ENV = process.env.APP_ENV ?? "development";

// resolve .env
const envPath = path.resolve(__dirname, `.env.${APP_ENV}`);

require("dotenv").config({
  path: envPath,
});

// schema for our client environment to be validated
const client = v.object({
  APP_ENV: v.picklist(["development", "staging", "production"]),
  API_URL: v.url(),
});

const buildTime = v.object({});

/**
 *
 * @type {Record<keyof z.infer<typeof client> , string | undefined>}
 */
const _clientEnv = {
  APP_ENV,
  API_URL: process.env.API_URL,
};

/**
 * @type {Record<keyof z.infer<typeof buildTime> , string | undefined>}
 */
const _buildTimeEnv = {};

// merge both _env objects
const _env = {
  ..._clientEnv,
  ..._buildTimeEnv,
};

// merge both our environments and ensure the match the
// merged _env above
const merged = v.merge(buildTime, client);
const parsed = v.safeParse(merged, _env, {
  abortEarly: true,
});

// if the parsing fails ,
// some environment variables are missing
// so the app can fail and we can get on with it
if (!parsed.success) {
  // verbose error message to allow the error to be solved easily
  console.error(
    "❌ Invalid Environment Variables",
    parsed.issues,
    `\n ❌ Missing Variables in .env.${APP_ENV} file , make sure all required variables are defined in the .env.${APP_ENV} file `,
    `\n 💡 Tip : If you recently updated the .env.${APP_ENV} and the error still persists , try restarting the sever with the -cc flag to clear the cache`,
  );

  // App level error , this will pull up the red screen we know and hate
  throw new Error(
    "Invalid Environment Variables , Check terminal for more details",
  );
}

// the successful output of parsing
const Env = parsed.output;
// parse our client environment
const ClientEnv = v.parse(client, _clientEnv);

// make available for use
module.exports = {
  Env,
  ClientEnv,
};
