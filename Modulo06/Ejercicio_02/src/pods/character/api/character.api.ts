import axios from 'axios';
import { Character } from './character.api-model';

const characterListUrl = '/api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get<Character>(`${characterListUrl}/${id}`);
  return data;
};


export const saveCharacter = async (character: Character): Promise<boolean> => {
  console.log(character.id);
  if (character.id) {
    await axios.put<Character>(`${characterListUrl}/${character.id}`, character);
  } else {
    await axios.post<Character>(characterListUrl, character);
  }
  return true;
};
