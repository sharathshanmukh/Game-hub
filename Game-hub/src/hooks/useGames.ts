import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";
export interface Platform{
    name:string,
    slug:string,
    id:number,
}

export interface Game{
    id:number,
    name:string,
    background_image:string;
    parent_platforms:{platform:Platform}[]
    metacritic:number;
    rating_top:number;
}


const useGames=(gameQuery:GameQuery)=>useData<Game>("/games",
{params:{genres:gameQuery.genre?.id,
    platforms:gameQuery.platform?.id,
     ordering:gameQuery.sort_order,
     search:gameQuery.searchText,
}},
[gameQuery]);
export default useGames;