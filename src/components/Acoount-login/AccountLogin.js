import { Menu, Image,  rem ,Input} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import {
  IconLogout,IconUserCircle
} from '@tabler/icons-react';
import adminIcon from "./../../assets/icons/healthicons_ui-user-profile.png"

export default function AccountLogin() {

  const navigate = useNavigate();

  
  return (
    <Menu  shadow="md" width={300} position="left-start" withArrow >
      <Menu.Target>
        <Image src={adminIcon} style={{height:"40px" , width:"40px"}}/>
      </Menu.Target>

      <Menu.Dropdown >
        {/* <Menu.Label>Application</Menu.Label> */}
        <Menu.Item leftSection={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}>
          user007@gmail.com
        </Menu.Item>
        <Menu.Item leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />} onClick={()=>{
          navigate("/",{replace:true}) 
        }}>
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}