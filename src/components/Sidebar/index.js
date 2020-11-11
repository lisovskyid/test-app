import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link, useHistory } from "react-router-dom";

import { siderWidth, menuMode } from "./settings";

const Sidebar = ({ sidebarMenu = [] }) => {
  const { location } = useHistory();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const onMount = () => {
      const isSiderHref = sidebarMenu.some(
        (item) => item.href === location.pathname
      );

      if (!isSiderHref) return;

      setActiveTab(location.pathname);
    };

    onMount();
  }, [location.pathname]);

  return (
    <Menu
      style={siderWidth}
      selectedKeys={[activeTab]}
      defaultSelectedKeys={[activeTab]}
      mode={menuMode}
    >
      {sidebarMenu.map(({ title, href }) => (
        <Menu.Item key={href}>
          <Link to={href}>{title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Sidebar;
