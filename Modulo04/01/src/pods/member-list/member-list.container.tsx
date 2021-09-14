import React from "react";
import { getMemberList } from "./api";

import { MemberList } from "./member-list.component";
import { mapMemberListToVM } from "./member-list.mappers";
import { Member } from "./member-list.vm";

interface Props {  
  filterSearch: (filter: string) => void;
  onSelect: (login: string) => void;
}

export const MemberListContainer: React.FC<Props> = (props) => {
  const {filterSearch, onSelect } = props;
  const [list, setList] = React.useState<Member[]>([]);
  const [filter, setFilter] = React.useState('lemoncode');

  React.useEffect(() => {
    getMemberList(filter).then(mapMemberListToVM).then(setList);
  }, [filter]);

  return (
    <>
      <MemberList list={list} filterSearch={setFilter} onSelect={onSelect} />
    </>
  );
};
