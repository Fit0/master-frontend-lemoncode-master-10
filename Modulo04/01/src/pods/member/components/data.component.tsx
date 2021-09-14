import React from 'react';
import { MemberInfo } from '../member.vm';

interface Props {
    member: MemberInfo;
}

export const Data: React.FC<Props> = props => {
  const { member } = props;

  return (
    <>
      <p>Id: {member.id}</p>
      <p>Login: {member.login}</p>
      <p><img src={member.avatar_url}/></p>
    </>
  );
};