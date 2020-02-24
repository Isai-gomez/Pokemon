import { url_api } from '../const/const';

export const getUrlPokemon = ( number = 25 ) => {
    return `${url_api}${number}`
}