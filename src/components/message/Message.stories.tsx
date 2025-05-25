// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import  { MessageInner } from './Message';

// import message from './Message';

// export default {
//   title: 'Example/Message',
//   component: MessageInner,
// } as ComponentMeta<typeof MessageInner>;

// export const MessageInnerDemo = () => {
//   return <>
//     <MessageInner type="success">Primary MessageInner</MessageInner>
//   </>
// }

// const info = () => {
//   message.info('This is a normal message');
// };

// export const App: React.FC = () => (
//   <button onClick={info}>
//     Display normal message
//   </button>
// );

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { MessageInner } from './Message';
import message from './Message';

// **默认导出：定义 Storybook 文档**
const meta: Meta<typeof MessageInner> = {
  title: "Components/Message",
  component: MessageInner,
  parameters: {
    docs: {
      description: {
        component: "这是一个通用的 Message 组件，可用于显示各种提示信息。",
      },
    },
  },
  argTypes: {
    type: { 
      control: "select", 
      options: ["success", "info", "warning", "error"],
      description: "消息的类型，可选 `success`、`info`、`warning` 和 `error`。",
    },
    // duration: {
    //   control: "number",
    //   description: "自动关闭的延迟时间，单位为秒。",
    // },
  },
};
export default meta;

// **消息示例**
export const Default: StoryObj<typeof MessageInner> = {
  args: {
    children: "默认 Message",
    type: "info",
  },
};

export const MessageWithType: StoryObj<typeof MessageInner> = {
  render: () => (
    <>
      <MessageInner type="success">Success Message</MessageInner>
      <MessageInner type="info">Info Message</MessageInner>
      <MessageInner type="warning">Warning Message</MessageInner>
      <MessageInner type="error">Error Message</MessageInner>
    </>
  ),
};

export const MessageAPI: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button onClick={() => message.success('This is a success message')}>
        Success
      </button>
      <button onClick={() => message.info('This is an info message')}>
        Info
      </button>
      <button onClick={() => message.warning('This is a warning message')}>
        Warning
      </button>
      <button onClick={() => message.error('This is an error message')}>
        Error
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "使用 message API 动态显示消息。",
      },
    },
  },
};