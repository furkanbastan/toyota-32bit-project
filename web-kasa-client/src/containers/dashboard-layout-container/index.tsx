import { Outlet } from "react-router-dom";

import { Sidebar } from "./sidebar";
import { Header } from "./header";
import * as S from "./styled";

function DashboardLayoutContainer() {
  return (
    <S.DashboardLayoutContainer>
      <Header />

      <Sidebar />

      <S.Main>
        <Outlet />
      </S.Main>
    </S.DashboardLayoutContainer>
  );
}

export { DashboardLayoutContainer };
