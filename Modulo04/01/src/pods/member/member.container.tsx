import React from 'react';
import { getMemberById } from './api';
import { MemberInfo } from './member.vm';
import { useParams } from 'react-router-dom';
import { mapMemberToVM } from './member.mappers';
import { Member } from './member.component';

interface Props {
  login: string;
}

export const MemberContainer: React.FC<Props> = props => {
  const { login } = props;

  const [member, setMember] = React.useState<MemberInfo>(null);

  React.useEffect(() => {
    getMemberById(login)
      .then(mapMemberToVM)
      .then(setMember);
  }, []);

  return (
    <>
      {member && (
        <Member member={member}/>
      )}
    </>
  );
};