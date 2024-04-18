import { Env } from "@env";
import axios from "axios";

// Create Your API instance using the Environment variables
// That have been validated
const client = axios.create({
  baseURL: Env.API_URL,
});

export default client;
