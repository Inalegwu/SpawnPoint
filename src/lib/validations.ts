import { z } from "zod";

export const TrendingResponse=z.object({
            page:z.number(),
            results:z.array(z.object({
                adult:z.boolean(),
                backdrop_path:z.string(),
                id:z.number(),
                title:z.string(),
                original_language:z.string(),
                original_title:z.string(),
                overview:z.string(),
                poster_path:z.string(),
                media_type:z.string(),
                genre_ids:z.array(z.number()),
                popularity:z.number(),
                releaseDate:z.string(),
                vide:z.boolean(),
                vote_average:z.number(),
                vote_count:z.number(),
            })),
            total_pages:z.number(),
            total_results:z.number()
        });
