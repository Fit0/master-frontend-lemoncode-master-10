import React from 'react';
import { AppHeader } from 'common-app/components/app-header.component';


export const AppLayout: React.FC = ({ children }) => (
  <div>
    <AppHeader />
    {children}
  </div>
);
