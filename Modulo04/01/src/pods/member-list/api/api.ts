import { Member } from './api.model';

export const getMemberList = async (organization:string): Promise<Member[]> => {
  return fetch(`https://api.github.com/orgs/${organization}/members`).then(r =>
    r.json()
  );
};
