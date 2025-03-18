// SubMenu.tsx
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
  const context = useContext(MenuContext);
  const [visible, setVisible] = useState(false);

  // 计算 className
  const classes = classNames('submenu-item menu-item', className, {
    'is-active': context.index === index,
    'is-visible': visible // 控制下拉菜单显示
  });

  // 处理鼠标悬停事件(横向菜单)
  const handleMouseEnter = () => {
    if (context.mode === 'horizontal') {
      setVisible(true)
    }
  }
  const handleMouseLeave = () => {
    if (context.mode === 'horizontal') {
      setVisible(false)
    }
  }

  // 处理点击事件（纵向菜单）
  const handleClick = () => {
    if (context.mode === 'vertical') {
      setVisible(!visible)
    }
  }

  // 渲染子菜单项
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childrenElement = child as React.ReactElement<MenuItemProps>;
      const { displayName } = childrenElement.type as React.FunctionComponent;
      if (displayName === 'MenuItem') {
        return React.cloneElement(childrenElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error("Warning: SubMenu has a child which is not a MenuItem component");
      }
    });

    return <ul className="viking-submenu">{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';
export default SubMenu;
