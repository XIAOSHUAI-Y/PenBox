import React, { useEffect, useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useListener } from './utils';
import getPlacement from './placement';
import { PointsType, PlacementType } from './placement';
import './overlay.scss';

export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  hasMask?: boolean;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  style?: React.CSSProperties;
  target?: HTMLElement | (() => HTMLElement);
  points?: PointsType;
  placement?: PlacementType;
  beforePosition?: (
    style: React.CSSProperties,
    config: {
      target: { width: number; height: number };
      placement?: PlacementType;
    }
  ) => React.CSSProperties;
}

const Overlay: React.FC<OverlayProps> = (props) => {
  const {
    className,
    children,
    style,
    hasMask,
    visible: pvisible,
    onVisibleChange,
    target,
    points,
    placement,
    beforePosition,
    ...others
  } = props;

  const [visible, setVisible] = useState(pvisible || false);
  const [positionStyle, setPositionStyle] = useState<React.CSSProperties>({});
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ('visible' in props) {
      setVisible(pvisible!);
    }
  }, [pvisible]);

  const handleMouseDown = (e: MouseEvent) => {
    const safeNodeList: HTMLElement[] = [];
    if (overlayRef.current) {
      safeNodeList.push(overlayRef.current);
    }

    const clickNode = e.target as Node;

    for (let index = 0; index < safeNodeList.length; index++) {
      const node = safeNodeList[index];
      if (node && node.contains(clickNode)) {
        return;
      }
    }

    onVisibleChange?.(false);
  };

  useListener(window, 'mousedown', handleMouseDown, visible);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!visible || !overlayRef.current) {
      return;
    }
    if (e.key === 'Escape') {
      onVisibleChange?.(false);
    }
  };

  useListener(window, 'keydown', handleKeyDown, visible);

  useEffect(() => {
    if (visible && overlayRef.current && target) {
      const targetElement = typeof target === 'function' ? target() : target;
      if (!targetElement) return;

      const positionStyle = getPlacement({
        target: targetElement,
        overlay: overlayRef.current,
        points,
        placement,
        beforePosition,
      });
      setPositionStyle(positionStyle);
    }
  }, [visible, target, points, placement, beforePosition]);

  const overlayRefCallback = useCallback(
    (node: HTMLDivElement | null) => {
      overlayRef.current = node;

      if (node && target) {
        const targetElement = typeof target === 'function' ? target() : target;
        if (!targetElement) return;

        const positionStyle = getPlacement({
          target: targetElement,
          overlay: node,
          points,
          placement,
          beforePosition,
        });
        setPositionStyle(positionStyle);
      }
    },
    [target, points, placement, beforePosition]
  );

  if (!visible || !children) {
    return null;
  }

  const child = React.Children.only(children) as React.ReactElement;
  if (!React.isValidElement(child)) return null;

  const childProps = child.props as React.HTMLAttributes<HTMLElement>;
  const newProps = {
    ...others,
    ref: overlayRefCallback,
    style: { ...positionStyle, ...childProps.style },
    className: `overlay-content ${childProps.className || ''}`.trim()
  };

  const newChildren = React.cloneElement(child, newProps);

  return ReactDOM.createPortal(
    <div className={`overlay-container ${className || ''}`.trim()}>
      {hasMask ? <div className="overlay-mask" /> : null}
      {newChildren}
    </div>,
    document.body
  );
};

export default Overlay;

