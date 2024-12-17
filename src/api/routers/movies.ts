import { router } from "react-query-kit";
import { fetch$ } from "../client";

export const movies=router("movies",{
    getTrendingMovies:router.query({
        fetcher:async()=>{
            
            const {data}=await fetch$("/trending/movie/day",{
                method:"GET"
            });

            return {
                trending:data?.results
            }
        }
    }),
    getMovieById:router.query({
        fetcher:async()=>{}
    })
})