import React from 'react';

import { MemberContainer } from 'pods/member/member.container';
import { useParams } from 'react-router-dom';

export const MemberScene: React.FC = () => {
  const { login } = useParams<{ login: string }>();

  return (
    <>
      <MemberContainer login={login} />
    </>
  );
};
