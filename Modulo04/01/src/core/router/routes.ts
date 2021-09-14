import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  login: string;
  memberList: string;
  viewMember: string;
  characterList: string;
  viewCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/members-list',
  login: '/login',
  memberList: '/members-list',
  viewMember: '/members/:login',
  characterList: '/character-list',
  viewCharacter: '/character/:id',
};

interface Routes extends Omit<SwitchRoutes, 'viewMember'> {
  viewMember: (login: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  viewMember: (login: string) => generatePath(switchRoutes.viewMember, { login }),
};