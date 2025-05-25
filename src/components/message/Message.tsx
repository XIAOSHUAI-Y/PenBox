import React, { ReactNode, CSSProperties, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import classNames from 'classnames';
import {
  CheckCircleFilled,
  InfoCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
  LoadingOutlined,
} from '@ant-design/icons';

import './index.scss';

export type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';

// 定义消息项类型
interface MessageItem {
  keys: number;
  type: NoticeType;
  content: ReactNode;
  duration: number;
  timer?: number;
  hide?: boolean;
}

// MessageInner 组件 props 类型
interface MessageInnerProps {
  type?: NoticeType;
  content?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const MessageInner = (props: MessageInnerProps) => {
  const { type = 'info', content, children } = props;

  const iconCls = classNames({
    'ant-message-custom-content': true,
    [`ant-message-${type}`]: type,
  });

  let icon = <InfoCircleFilled />;

  switch (type) {
    case 'success':
      icon = <CheckCircleFilled />;
      break;
    case 'error':
      icon = <CloseCircleFilled />;
      break;
    case 'warning':
      icon = <ExclamationCircleFilled />;
      break;
    case 'loading':
      icon = <LoadingOutlined />;
      break;
  }

  return (
    <div>
      <div className='ant-message-notice'>
        <div className='ant-message-notice-content'>
          <div className={iconCls}>
            {icon}
            {content || children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Message 组件 props 类型
interface MessageProps {
  dataSource: MessageItem[];
  className?: string;
  style?: CSSProperties;
}

// const Message = (props: MessageProps) => {
//   const { dataSource, ...others } = props;
//   const [list, setList] = useState<MessageItem[]>(dataSource);

//   useEffect(() => {
//     setList(dataSource);
//   }, [dataSource]);

//   useEffect(() => {
//     const timers = list.map(i => {
//       if (!i.timer) {
//         return window.setTimeout(() => {
//           const idx = list.indexOf(i);
//           if (idx > -1) {
//             i.hide = true;
//             setList([...list]);
//           }
//         }, i.duration * 1000);
//       }
//       return i.timer;
//     });

//     return () => {
//       timers.forEach(timer => timer && clearTimeout(timer));
//     };
//   }, [list]);

//   return (
//     <div className='ant-message'>
//       {list.map((item) => !item.hide && <MessageInner key={item.keys} {...item} />)}
//     </div>
//   );
// };

const Message = ({ dataSource }: MessageProps) => (
  <div className='ant-message'>
    {dataSource.map((item) => !item.hide && <MessageInner key={item.keys} {...item} />)}
  </div>
);


// 全局变量
let messageMountRoot: HTMLElement | null = null;
let messageIndex = 0;
const messageList: MessageItem[] = [];

// callMessage 函数
// const callMessage = (type: NoticeType, content: ReactNode, duration: number = 1) => {
//   if (!messageMountRoot) {
//     messageMountRoot = document.createElement('div');
//     document.body.appendChild(messageMountRoot);
//   }

//   messageList.push({
//     keys: ++messageIndex,
//     type,
//     content,
//     duration,
//   });

//   const root = createRoot(messageMountRoot);
//   root.render(<Message dataSource={messageList} />);
// };

const callMessage = (type: NoticeType, content: ReactNode, duration: number = 1) => {
  if (!messageMountRoot) {
    messageMountRoot = document.createElement('div');
    document.body.appendChild(messageMountRoot);
  }

  const key = ++messageIndex;

  const item: MessageItem = {
    keys: key,
    type,
    content,
    duration,
  };

  messageList.push(item);

  // 设置定时器让消息消失
  setTimeout(() => {
    const idx = messageList.findIndex(i => i.keys === key);
    if (idx > -1) {
      messageList[idx].hide = true;
      rerender();
    }
  }, duration * 1000);

  rerender();
};

// 抽出渲染逻辑
const rerender = () => {
  if (messageMountRoot) {
    const root = createRoot(messageMountRoot);
    root.render(<Message dataSource={messageList} />);
  }
};


// Message API 类型
interface MessageApi {
  success: (content: ReactNode, duration?: number) => void;
  warning: (content: ReactNode, duration?: number) => void;
  loading: (content: ReactNode, duration?: number) => void;
  info: (content: ReactNode, duration?: number) => void;
  error: (content: ReactNode, duration?: number) => void;
}

const message: MessageApi = {
  success: (content, duration = 3) => callMessage('success', content, duration),
  warning: (content, duration = 3) => callMessage('warning', content, duration),
  loading: (content, duration = 3) => callMessage('loading', content, duration),
  info: (content, duration = 3) => callMessage('info', content, duration),
  error: (content, duration = 3) => callMessage('error', content, duration), 
};

export default message;