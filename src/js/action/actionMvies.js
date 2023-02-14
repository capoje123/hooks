import { DELETEMOVIE } from "../consts/MoviesConst"

export const deleteMovie=(id)=>{
    return{type:DELETEMOVIE,payload:id}
}