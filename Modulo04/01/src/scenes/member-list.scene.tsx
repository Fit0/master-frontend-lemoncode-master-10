import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MemberContainer } from 'pods/member/member.container';
import { MemberListContainer } from 'pods/member-list';

export const MemberListScene: React.FC = () => {
  const [selected, setSelected] = React.useState<string>(null);
  const [filter, setFilter] = React.useState<string>(null);

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <>
      <MemberListContainer onSelect={setSelected} filterSearch={setFilter} />
      <>
        <Dialog open={!!selected} onClose={handleClose}>          
          <DialogContent>
            <MemberContainer login={selected} />
          </DialogContent>
        </Dialog>
      </>
    </>
  );
};