import { CharacterEntityApi } from "./character-collection.api-model";
import axios from 'axios';

const url = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await axios.get<CharacterEntityApi[]>(url);  
  return data;
  };
  
export const deleteCharacter = async (id: string): Promise<boolean> => {
    await axios.delete(`${url}/${id}`);
    return true;
  };
