import * as am from './api/api.model';
import * as vm from './member.vm';

export const mapMemberToVM = (data: am.Member): vm.MemberInfo => ({
  id: data.id,
  login: data.login,
  avatar_url: data.avatar_url,
});
