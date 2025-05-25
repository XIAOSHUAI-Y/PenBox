import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

// Menu 组件元数据
const menuMeta: Meta<typeof Menu> = {
  title: "components/Menu", // 组件在 Storybook 中的路径
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: "一个多功能菜单组件，支持水平和垂直布局，并具有子菜单功能",
      },
    },
  },
  argTypes: {
    mode: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "菜单方向 - 水平或垂直",
    },
    defaultIndex: {
      control: "text",
      description: "默认选中的菜单项索引",
    },
    onSelect: {
      action: "selected",
      description: "菜单项被选中时的回调函数",
    },
  },
  tags: ['autodocs'], // 自动生成文档
};

export default menuMeta;

// 基础水平菜单故事
export const 默认水平菜单: StoryObj<typeof Menu> = {
  render: (args) => (
    <Menu {...args}>
      <MenuItem>菜单项 1</MenuItem>
      <MenuItem>菜单项 2</MenuItem>
      <MenuItem disabled>禁用项</MenuItem>
      <MenuItem>菜单项 4</MenuItem>
    </Menu>
  ),
  args: {
    mode: "horizontal", // 水平模式
    defaultIndex: "0", // 默认选中第一项
    onSelect: action('菜单项被选中'), // 选中回调
  },
};

// 垂直菜单故事
export const 垂直菜单: StoryObj<typeof Menu> = {
  render: (args) => (
    <Menu {...args}>
      <MenuItem>菜单项 1</MenuItem>
      <MenuItem>菜单项 2</MenuItem>
      <SubMenu title="子菜单">
        <MenuItem>子项 1</MenuItem>
        <MenuItem>子项 2</MenuItem>
      </SubMenu>
      <MenuItem>菜单项 4</MenuItem>
    </Menu>
  ),
  args: {
    mode: "vertical", // 垂直模式
    defaultIndex: "0", // 默认选中第一项
    onSelect: action('菜单项被选中'), // 选中回调
  },
};

// 带子菜单的菜单故事
export const 带子菜单的菜单: StoryObj<typeof Menu> = {
  render: (args) => (
    <Menu {...args}>
      <MenuItem>首页</MenuItem>
      <SubMenu title="产品">
        <MenuItem>产品 1</MenuItem>
        <MenuItem>产品 2</MenuItem>
        <MenuItem>产品 3</MenuItem>
      </SubMenu>
      <SubMenu title="服务">
        <MenuItem>服务 1</MenuItem>
        <MenuItem>服务 2</MenuItem>
      </SubMenu>
      <MenuItem>关于</MenuItem>
      <MenuItem>联系我们</MenuItem>
    </Menu>
  ),
  args: {
    mode: "horizontal", // 水平模式
    defaultIndex: "0", // 默认选中第一项
    onSelect: action('菜单项被选中'), // 选中回调
  },
};

// MenuItem 组件故事
const menuItemMeta: Meta<typeof MenuItem> = {
  title: "组件/Menu/MenuItem", // 子组件路径
  component: MenuItem,
  tags: ['autodocs'],
};

export const 默认菜单项: StoryObj<typeof MenuItem> = {
  args: {
    children: "菜单项",
  },
};

export const 禁用菜单项: StoryObj<typeof MenuItem> = {
  args: {
    children: "禁用项",
    disabled: true, // 禁用状态
  },
};

// SubMenu 组件故事
const subMenuMeta: Meta<typeof SubMenu> = {
  title: "组件/Menu/SubMenu", // 子组件路径
  component: SubMenu,
  tags: ['autodocs'],
};

export const 默认子菜单: StoryObj<typeof SubMenu> = {
  render: (args) => (
    <Menu mode="horizontal">
      <SubMenu {...args}>
        <MenuItem>子项 1</MenuItem>
        <MenuItem>子项 2</MenuItem>
      </SubMenu>
    </Menu>
  ),
  args: {
    title: "子菜单",
  },
};

export const 垂直子菜单: StoryObj<typeof SubMenu> = {
  render: (args) => (
    <Menu mode="vertical">
      <SubMenu {...args}>
        <MenuItem>子项 1</MenuItem>
        <MenuItem>子项 2</MenuItem>
      </SubMenu>
    </Menu>
  ),
  args: {
    title: "垂直子菜单",
  },
};