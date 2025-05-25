import React, { ReactElement, useCallback, useRef, cloneElement, useState } from 'react';
import Overlay, { OverlayProps } from './Overlay';
import { PlacementType } from './placement';
import './overlay.scss';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface PopupProps extends Omit<OverlayProps, 'children'> {
  trigger: ReactElement | string;
  children: React.ReactNode;
  placement?: PlacementType;
  triggerType?: 'hover' | 'click';
  contentClassName?: string;
}

const Popup: React.FC<PopupProps> = (props) => {
  const {
    placement = 'bottomLeft',
    trigger,
    triggerType = 'click',
    children,
    contentClassName = '',
    ...others
  } = props;

  const triggerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const mouseEnterTimer = useRef<number | null>(null);
  const mouseOutTimer = useRef<number | null>(null);

  const triggerRefCallback = useCallback((node: HTMLElement) => {
    triggerRef.current = node;
  }, []);

  const handleMouseEnter = () => {
    if (mouseOutTimer.current) {
      clearTimeout(mouseOutTimer.current);
      mouseOutTimer.current = null;
    }
    if (!mouseEnterTimer.current && !visible) {
      mouseEnterTimer.current = window.setTimeout(() => {
        setVisible(true);
      }, 100);
    }
  };

  const handleMouseLeave = () => {
    if (mouseEnterTimer.current) {
      clearTimeout(mouseEnterTimer.current);
      mouseEnterTimer.current = null;
    }
    if (!mouseOutTimer.current && visible) {
      mouseOutTimer.current = window.setTimeout(() => {
        setVisible(false);
      }, 100);
    }
  };

  const overlayProps: any = {};
  const triggerProps = {
    ref: triggerRefCallback,
    className: 'overlay-trigger-button'
  } as any;

  if (triggerType === 'hover') {
    triggerProps.onMouseEnter = handleMouseEnter;
    triggerProps.onMouseLeave = handleMouseLeave;
    overlayProps.onMouseEnter = handleMouseEnter;
    overlayProps.onMouseLeave = handleMouseLeave;
  } else {
    triggerProps.onClick = () => {
      setVisible(!visible);
    };
  }

  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };

  const triggerEle = typeof trigger === 'string' ? <span>{trigger}</span> : trigger;
  const triggerNode = cloneElement(triggerEle, triggerProps);

  const contentClassNames = `overlay-content ${contentClassName}`.trim();

  return (
    <>
      {triggerNode}
      <Overlay
        {...others}
        {...overlayProps}
        placement={placement}
        target={() => triggerRef.current!}
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        {typeof children === 'string' ? (
          <div className={contentClassNames}>{children}</div>
        ) : (
          React.cloneElement(children as React.ReactElement, {
            className: contentClassNames
          })
        )}
      </Overlay>
    </>
  );
};

export default Popup;

