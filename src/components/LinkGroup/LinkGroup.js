// // import { useState } from 'react'
// import {
//   Group,
//   Box,
//   Collapse,
//   Text,
//   UnstyledButton,
//   rem,
//   Image,
// } from "@mantine/core";
// import { IconChevronRight } from "@tabler/icons-react";
// import classes from "./LinkGroup.module.css";
// import { Link, NavLink, useLocation } from "react-router-dom";

// export function LinksGroup({ icon, label, links, opened, setOpened, navLink }) {
//   const location = useLocation();
//   const hasLinks = Array.isArray(links);
//   const items = (hasLinks ? links : []).map((link) => (
//     <Link
//       to={link.link}
//       className={` ${
//         location.pathname ==  link|| opened ? classes.navLink : classes.link
//       }`}
//       key={link.label}
//     >
//       {link.label}
//     </Link>
//   ));

//   console.log(links);
//   return (
//     <>
//       <UnstyledButton
//         onClick={() => setOpened()}
//         className={classes.control}
//         my="sm"
//       >
//         <Group gap={0}>
//           <Box style={{ display: "flex", alignItems: "center" }}>
//             <Image src={icon} />
//             <Link
//               to={navLink}
//               className={` ${
//                 location.pathname == navLink || opened
//                   ? classes.navLink
//                   : classes.link
//               }`}
//             >
//               <Box ml="md" style={{ fontSize: "24px" }}>
//                 {label}
//               </Box>
//             </Link>
//             {hasLinks && (
//               <UnstyledButton>
//                 <IconChevronRight
//                   style={{
//                     width: rem(32),
//                     height: rem(32),
//                     transform: opened ? "rotate(90deg)" : "none",
//                     color: opened ? "#DC8585" : "#FFFFFF",
//                     // alignItems:"center",
//                     marginTop: "10px",
//                   }}
//                 />
//               </UnstyledButton>
//             )}
//           </Box>
//         </Group>
//       </UnstyledButton>

//       {hasLinks ? (
//         <Collapse in={opened}>
//           {items.map((item) => {
//             return (
//               <div key={item.key}>
//                 <Group>
//                   {/* <Icon style={{ width: rem(24), height: rem(24) }} /> */}
//                   <Text>{item}</Text>
//                 </Group>
//               </div>
//             );
//           })}
//         </Collapse>
//       ) : null}
//     </>
//   );
// }

import React from "react";
import {
  Group,
  Box,
  Collapse,
  Text,
  UnstyledButton,
  rem,
  Image,
  Flex,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./LinkGroup.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";

export function LinksGroup({ icon, label, links, opened, setOpened, navLink }) {
  const location = useLocation();
  const hasLinks = Array.isArray(links);

  const isLinkActive = (link) => {
    if (link.link === location.pathname) {
      return true;
    } else if (Array.isArray(link.links)) {
      return link.links.some((nestedLink) => isLinkActive(nestedLink));
    }
    return false;
  };

  const items = (hasLinks ? links : []).map((link) => (
    <Link
      to={link.link}
      className={`${isLinkActive(link) ? classes.navLink : classes.link}`}
      key={link.label}
    >
      <p style={{ fontSize: 12 }}>{link.label}</p>
    </Link>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened()}
        className={classes.control}
        my="sm"
      >
        <Group gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Image src={icon} />
            <Link
              to={navLink}
              className={`${
                location.pathname === navLink || opened
                  ? classes.navLink
                  : classes.link
              }`}
            >
              <Flex ml="md" style={{ fontSize: "19px" }} w="163px">
                {label}
                {hasLinks && (
                  <UnstyledButton>
                    <IconChevronRight
                      style={{
                        width: rem(32),
                        height: rem(32),
                        transform: opened ? "rotate(90deg)" : "none",
                        color: opened ? "#DC8585" : "#FFFFFF",
                        // marginTop: "10px",
                        display: "flex",
                      }}
                    />
                  </UnstyledButton>
                )}
              </Flex>
            </Link>
          </Box>
        </Group>
      </UnstyledButton>

      {hasLinks ? (
        <Collapse in={opened}>
          {items.map((item) => (
            <Flex key={item.key} pb="8px">
              <Group ml={"25%"}>
                <p>{item}</p>
              </Group>
            </Flex>
          ))}
        </Collapse>
      ) : null}
    </>
  );
}
