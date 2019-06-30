import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "./layout.module.less";
import Routes from "@routes/index";
import BaseRouter from "@routes/BaseRouter";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class BaseLayout extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(Routes);

    this.setState({
      menuTreeNode
    });
  }

  // 菜单渲染
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            title={
              <span>
                <Icon type={item.icon} />
                {item.title}
              </span>
            }
            key={item.key}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.path}>
            <Icon type={item.icon} />
            {item.title}
          </NavLink>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div styleName="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">资产地图</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider
              width={200}
              style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 64
              }}
            >
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["dataBase"]}>
                {this.state.menuTreeNode}
              </Menu>
            </Sider>
          </Layout>
          <Layout style={{ marginLeft: 200, marginTop: 64 }}>
            <Content style={{ margin: "0 16px" }}>
              <BaseRouter />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default BaseLayout;
