import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import { useSelector } from "react-redux";
import { selectCurrentAdmin } from "@/redux/auth/selectors";
import {
  SettingOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";


const { Text } = Typography;
const { Sider } = Layout;
const { SubMenu } = Menu;
const whiteText = {
  color: '#ffffff',
  fontSize: '20px'
};
const colorWhite = {
  color: '#ffffff',
  fontSize: '13px'
};
const logoContainer = {
  display: 'flex',
  justifyContent: 'center'
};
function Navigation() {
  const [collapsed, setCollapsed] = useState(false);
  const user = useSelector(selectCurrentAdmin);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <div style={{ ...logoContainer, marginBottom: '10px', marginTop: '10px' }}>
          <Text style={colorWhite}>Welcome {user.name}</Text>
        </div>

      </Sider>
    </>
  );
}
export default Navigation;
