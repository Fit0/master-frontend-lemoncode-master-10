export interface Character {
    id: number;
    name: string; 
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    }
    location: {
        name: string;
        url: string;
    }
    image: string;
    episode: string[];
    url: string;
    created: string;
}
  
  export const createEmptyCharacter = (): Character => ({
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: null,
    location: null,
    image: '',
    episode: [],
    url: '',
    created: ''
  });