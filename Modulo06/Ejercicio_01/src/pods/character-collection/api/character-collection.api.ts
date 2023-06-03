import { CharacterEntityApi } from "./character-collection.api-model";
import Axios from "axios";

const urlApi = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]>=> {
    const response = await Axios.get(urlApi);
    return response.data.results;
}
