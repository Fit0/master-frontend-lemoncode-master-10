import { Member } from './api.model';

export const getMemberById = async (login: string): Promise<Member> => {
  return fetch(`https://api.github.com/users/${login}`).then(r =>
    r.json()
  );
};