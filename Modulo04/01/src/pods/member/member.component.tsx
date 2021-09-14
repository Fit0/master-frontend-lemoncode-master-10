import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { MemberInfo } from './member.vm';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Data } from './components/data.component';

interface Props {
  member: MemberInfo;
}

export const Member: React.FC<Props> = props => {
  const { member } = props;

  const [tab, setTab] = React.useState(0);

  return (
    <>
      <AppBar position="static">
        <Tabs value={tab} onChange={null}>
          <Tab label="Member" />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        <Data member={member} />
      </TabPanel>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
