import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Button, AppShell, Group, Image  ,Burger} from "@mantine/core";
import "./topnav.style.css";
import burger from "./../../assets/buttons/Vector.png";

import AccountLogin from "../Acoount-login/AccountLogin";

// const items = [
//   { title: "Mantine", href: "#" },
//   { title: "Mantine hooks", href: "#" },
//   { title: "use-id", href: "#" },
// ].map((item, index) => (
//   <Anchor href={item.href} key={index}>
//     {item.title}
//   </Anchor>
// ));

export default function Topnav({
  mobileOpened,
  desktopOpened,
  toggleMobile,
  toggleDesktop,
}) {
  return (
    <AppShell.Header
      style={{
        margin: "10px 20px",
      }}
    >
      <Group justify="space-between" align="center" h="100%" px="md">
        <Group>
          <Button
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
            style={{
              background: "none",
            }}
          >
            <Image src={burger} />
          </Button>
          {/* <Burger
          opened={desktopOpened}
          onClick={toggleDesktop}
          visibleFrom='sm'
          size='sm'
        /> */}
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          hiddenFrom="sm" 
          size='sm'
        />
          <div className="topnav">
            <Breadcrumb />
          </div>
        </Group>
        <AccountLogin />
      </Group>
    </AppShell.Header>
  );
}
