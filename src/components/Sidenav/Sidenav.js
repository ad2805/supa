import { AppShell, Group, Text, Button, Image, Flex } from "@mantine/core";
import { LinksGroup } from "../LinkGroup/LinkGroup";
import homeIcon from "./../../assets/icons/Home.png";
import mapIcon from "./../../assets/icons/Group 3678.svg";
import reportsIcon from "./../../assets/icons/reports.svg";
import sosIcon from "./../../assets/icons/Group.svg";
import { useMediaQuery } from "@mantine/hooks";
import burger from "./../../assets/buttons/burgerWhite.png";
import IconBikeList from "./../../assets/icons/IconBikeList.png";
import IconSupport from "./../../assets/icons/IconSupport.png";
import "./Sidenav.css";
const mockdata = [
  { label: "Dashboard", icon: homeIcon, navLink: "/main-page/dashboard" },
  {
    label: "Maps",
    icon: mapIcon,
    initiallyOpened: false,
    navLink: "/main-page/Maps/VehicleDensity",
    links: [
      { label: "Vehicle Density", link: "/main-page/Maps/VehicleDensity" },
      { label: "Signal Strength", link: "/main-page/Maps/SignalStrength" },
    ],
  },
  { label: "SOS", icon: sosIcon, navLink: "/main-page/Sos" },
  { label: "Support", icon: IconSupport, navLink: "/main-page/Support" },
  { label: "Bike List", icon: IconBikeList, navLink: "/main-page/BikesList" },
  {
    label: "Insights",
    icon: reportsIcon,
    navLink: "/main-page/Insights/Overview",
    links: [
      { label: "Overview", link: "/main-page/Insights/Overview" },
      { label: "User Insights", link: "/main-page/Insights/UserInsights" },
      {
        label: "Operational Insights",
        link: "/main-page/Insights/OperationalInsights",
      },
      {
        label: "Predictions",
        link: "/main-page/Insights/Predictions",
      },
    ],
  },
];

export default function SideNav({ linkState, updateLinkState, toggleMobile }) {
  const links =
    linkState &&
    mockdata.map((item, index) => (
      <LinksGroup
        {...item}
        key={item.label}
        opened={linkState[index]}
        setOpened={() => updateLinkState(index)}
      />
    ));
  const isMobile = useMediaQuery("(max-width: 765px)");

  return (
    <AppShell.Navbar
      p="md"
      style={{
        margin: "10px",
        textAlign: "center",
        background: "#182452",
        color: "#FFFFFF",
      }}
    >
      <Group
        style={{
          marginBottom: "30px",
        }}
        justify="space-between"
      >
        {/* <Image src={logo} /> */}
        <Text
          style={{
            fontWeight: "700",
            fontSize: "24px",
            textAlign: "center",
            marginLeft: "30px",
          }}
        >
          CLUSTER
        </Text>
        {isMobile && (
          <Button bg="transparent" mr="lg" onClick={toggleMobile}>
            <Image h="30px" src={burger} />
          </Button>
        )}
      </Group>
      <Flex direction="column">{links}</Flex>
    </AppShell.Navbar>
  );
}
