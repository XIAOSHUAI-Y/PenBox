import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

// 定义支持的动画名称类型
// 这些字符串代表 CSS 过渡动画的类名
// 需要在 CSS 文件中定义相应的动画效果
// 例如： .zoom-in-top-enter, .zoom-in-top-enter-active 等

type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-bottom'
  | 'zoom-in-right';

// 定义 Transition 组件的 props
interface TransitionProps {
  animation?: AnimationName; 
  wrapper?: boolean; // 是否使用包装 div，避免 CSS transition 覆盖动画
}

const Transition: React.FC<TransitionProps & CSSTransitionProps> = (props) => {
  const { children, classNames, animation, wrapper, ...restProps } = props;
  
  // 创建一个 ref，用于绑定 CSSTransition 组件内部的 DOM 元素
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      classNames={classNames ? classNames : animation} 
      {...restProps} 
    >
      {(state, childProps) => {
        // 检查 children 是否是一个函数（React Transition Group 支持 children 作为函数）
        const childNode =
          typeof children === 'function' ? children(state, childProps) : children;
        
        // 如果 wrapper 为 true，则用 div 包裹子元素，并绑定 ref
        return wrapper ? <div ref={nodeRef}>{childNode}</div> : childNode;
      }}
    </CSSTransition>
  );
};

export default Transition;
