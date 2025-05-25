import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tooltip, { TooltipProps } from "./Tooltip";

// 默认导出：定义 Storybook 文档配置
const meta: Meta<typeof Tooltip> = {
  title: "components/Tooltip",  // 修改了分类名称更符合中文习惯
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: "悬浮提示组件，当用户悬停在元素上时显示额外信息。",  // 中文描述
      },
    },
  },
  argTypes: {
    position: { 
      control: "select", 
      options: ["top", "bottom", "left", "right"],
      description: "提示框位置，可选值：'top' | 'bottom' | 'left' | 'right'",  // 中文说明
    },
    content: {
      control: "text",
      description: "提示框内容文本",  // 中文说明
    },
  },
  tags: ['autodocs']  // 添加自动生成文档标签
};
export default meta;

// 基础示例
export const 基础用法: StoryObj<typeof Tooltip> = {
  args: {
    children: "悬停查看提示",  // 中文示例文本
    content: "这是默认提示内容",  // 中文示例文本
  },
  name: "基础用法"  // 明确指定中文故事名
};

// 不同位置示例
export const 位置示例: StoryObj<typeof Tooltip> = {
  render: () => (
    <div style={{ 
      display: "flex", 
      gap: "20px", 
      justifyContent: "center", 
      padding: "50px",
      flexWrap: "wrap" 
    }}>
      <Tooltip content="上方提示" position="top">
        上方提示
      </Tooltip>
      <Tooltip content="下方提示" position="bottom">
        下方提示
      </Tooltip>
      <Tooltip content="左侧提示" position="left">
        左侧提示
      </Tooltip>
      <Tooltip content="右侧提示" position="right">
        右侧提示
      </Tooltip>
    </div>
  ),
  name: "位置示例",  // 中文故事名
  parameters: {
    docs: {
      description: {
        story: "展示提示框在不同位置的显示效果。",  // 中文描述
      },
    },
  },
};

// 自定义内容示例
export const 自定义内容: StoryObj<typeof Tooltip> = {
  args: {
    children: "悬停查看自定义内容",
    content: (
      <div style={{ padding: "8px" }}>
        <h4 style={{ margin: 0 }}>自定义标题</h4>
        <p style={{ margin: "4px 0 0" }}>支持富文本和样式自定义</p>
      </div>
    ),
    position: "right",
  },
  name: "自定义内容",  // 中文故事名
};

