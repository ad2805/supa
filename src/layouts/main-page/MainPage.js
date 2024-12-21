import React from "react";
import SideNav from "../../components/Sidenav/Sidenav";
import Topnav from "./../../components/Topnav/Topnav";
import "./mainPage.module.css";
// import classes from './mainPage.module.css'
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [linkState, setLinkState] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  function updateLinkState(index) {
    const linkStateClone = linkState.map((opened, i) =>
      i === index ? !opened : false
    );
    setLinkState(linkStateClone);
  }

  return (
    <AppShell
      layout="alt"
      header={{ height: 70 }}
      footer={{ height: 60 }}
      navbar={{
        width: 206,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
      style={{
        height: "max-content",
        paddingBottom: "0px",
        backgroundColor: "#EBEBEB",
      }}
    >
      <Topnav
        mobileOpened={mobileOpened}
        toggleDesktop={toggleDesktop}
        toggleMobile={toggleMobile}
        desktopOpened={desktopOpened}
      />
      <SideNav
        linkState={linkState}
        toggleMobile={toggleMobile}
        updateLinkState={(index) => {
          updateLinkState(index);
        }}
      />
      <AppShell.Main
        style={{
          height: "max-content",
          paddingBottom: "0px",
          minHeight: "unset",
        }}
      >
        {/* provide context here */}
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
