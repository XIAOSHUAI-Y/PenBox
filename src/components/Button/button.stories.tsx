import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import Button from "./button";

// **默认导出：定义 Storybook 文档**
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "这是一个通用的 Button 组件，可用于各种交互。",
      },
    },
  },
  argTypes: {
    btnType: { 
      control: "select", 
      options: ["primary", "danger", "link"],
      description: "按钮的类型，可选 `primary`、`danger` 和 `link`。",
    },
    size: { 
      control: "select", 
      options: ["lg", "sm"],
      description: "按钮的尺寸，可选 `lg` 和 `sm`。",
    },
  },
};
export default meta;

// **按钮示例**
export const Default: StoryObj<typeof Button> = {
  args: {
    children: "默认 Button",
  },
};

export const ButtonWithSize: StoryObj<typeof Button> = {
  render: () => (
    <>
      <Button size="lg" onClick={action('clicked')}>Large Button</Button>
      <Button size="sm">Small Button</Button>
    </>
  ),
};

export const ButtonWithType: StoryObj<typeof Button> = {
  render: () => (
    <>
      <Button btnType="primary">Primary Button</Button>
      <Button btnType="danger">Danger Button</Button>
      <Button btnType="link" href="https://google.com">
        Link Button
      </Button>
    </>
  ),
};
