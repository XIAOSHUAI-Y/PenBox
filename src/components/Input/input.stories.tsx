import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import Input from "./input";
import { faSearch, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "这是一个通用的 Input 组件，支持多种样式和功能。",
      },
    },
  },
  argTypes: {
    size: { 
      control: "select", 
      options: ["lg", "sm"],
      description: "输入框的尺寸，可选 `lg` 和 `sm`。",
    },
    disabled: { 
      control: "boolean",
      description: "是否禁用输入框。",
    },
    icon: { 
      table: { disable: true },
      description: "输入框的图标（FontAwesome 图标）。",
    },
    prepend: { 
      description: "输入框的前缀内容。",
    },
    append: { 
      description: "输入框的后缀内容。",
    },
    onChange: { 
      action: "changed",
      description: "输入内容变化时的回调函数。",
    },
  },
};
export default meta;

// **默认输入框**
export const Default: StoryObj<typeof Input> = {
  args: {
    placeholder: "请输入内容",
  },
};

// **不同尺寸的输入框**
export const InputWithSize: StoryObj<typeof Input> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input size="lg" placeholder="大号输入框" onChange={action('large input changed')} />
      <Input placeholder="默认输入框" onChange={action('default input changed')} />
      <Input size="sm" placeholder="小号输入框" onChange={action('small input changed')} />
    </div>
  ),
};

// **不同状态的输入框**
export const InputWithState: StoryObj<typeof Input> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input disabled placeholder="禁用状态" />
      <Input icon={faSearch} placeholder="带图标的输入框" onChange={action('icon input changed')} />
    </div>
  ),
};

// **带前后缀的输入框**
export const InputWithAffix: StoryObj<typeof Input> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input prepend="https://" placeholder="example.com" onChange={action('prepend input changed')} />
      <Input append=".com" placeholder="example" onChange={action('append input changed')} />
      <Input 
        prepend="https://"
        append=".com" 
        placeholder="example" 
        onChange={action('both affix input changed')} 
      />
    </div>
  ),
};