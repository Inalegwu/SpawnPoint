import { TrendingResponse } from "@/lib/validations";
import { createFetch, createSchema } from "@better-fetch/fetch";
import { Env } from "@env";
import axios from "axios";

const client = axios.create({
    baseURL:Env.EXPO_PUBLIC_API_URL,
    headers:{
        Authorization:`Bearer ${Env.EXPO_PUBLIC_API_TOKEN}`
    }
});

const schema=createSchema({
    "/trending/movie/day":{
        output:TrendingResponse
    },
    "/trending/tv/day":{
        output:TrendingResponse
    }
})

export const fetch$=createFetch({
    baseURL:Env.EXPO_PUBLIC_API_URL,
    schema,
    headers:{
        authorization:`Bearer ${Env.EXPO_PUBLIC_API_TOKEN}`
    }
})

export default client;
