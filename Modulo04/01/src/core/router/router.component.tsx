import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { MemberListScene, MemberScene } from "scenes";
import { AppLayout } from "layouts";
import { AuthProvider } from "core/providers/auth.context";

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <AuthProvider>
            <Route exact={true} path={switchRoutes.memberList}>
              <MemberListScene />
            </Route>
            <Route exact={true} path={switchRoutes.viewMember}>
              <MemberScene />
            </Route>            
        </AuthProvider>
      </Switch>
    </HashRouter>
  );
};
