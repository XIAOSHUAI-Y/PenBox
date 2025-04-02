import React, { createContext, useState } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './menuItem';

// 定义菜单模式的类型：横向（horizontal）或纵向（vertical）
type MenuMode = 'horizontal' | 'vertical'; 
type SelectCallback = (selectedIndex: string) => void

// 定义 Menu 组件的属性接口
export interface MenuProps {
	defaultIndex?: string; //默认高亮的菜单项索引
	className?: string;
	mode?: MenuMode; // 菜单模式（横向或纵向）
	style?: React.CSSProperties;
	onSelect?: SelectCallback; // 菜单项被选中时的回调函数
	children?: React.ReactNode;
}

// 定义 MenuContext 的上下文接口
interface IMenuContext {
  index: string
  mode?: string
  onSelect?: SelectCallback
}
// 创建 MenuContext 上下文
export const MenuContext = createContext<IMenuContext>({index: '0'})

const Menu: React.FC<MenuProps> = (props) => {
	const { className, mode = 'horizontal', style, children, defaultIndex = '0', onSelect } = props;
  const [active, setActive] = useState(defaultIndex)
	const classes = classNames('yjy-menu', className, {
		'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
	});

  // 处理菜单项点击事件
  const handleClick = (index: string) => {
    setActive(index); // 更新当前选中的菜单项索引
    if (onSelect) {
      onSelect(index); // 调用外部传入的 onSelect 回调函数
    }
  }

  // 传递给子组件的上下文值
  const passedContext: IMenuContext = {
    index: active ? active : '0', // 当前选中的菜单项索引
    onSelect: handleClick, // 点击菜单项时的回调函数
    mode,
  }

  const renderChildren = () => {
    let validIndex = 0
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        const childrenElement = child as React.ReactElement<MenuItemProps>;

        // 检查 childrenElement.type 是否是一个函数组件或类组件
        if (typeof childrenElement.type === 'function') {
          const { displayName } = childrenElement.type as React.FunctionComponent;

          // 检查子元素是否为 MenuItem
          if (displayName === 'MenuItem' || displayName === 'SubMenu') {
            return React.cloneElement(childrenElement, {
              index: (validIndex++).toString() // 传递 number 类型的 index
            });
          } else {
            console.error('Warning: Menu has a child which is not a MenuItem component');
          }
        } else {
          console.error('Warning: Menu has an invalid child');
        }
      }
      return child;
    });
  };

	return (
		<ul
			className={classes}
			style={style}
      data-testid="test-menu">
      {/* 使用 MenuContext.Provider 提供上下文值 */}
			<MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
		</ul>
	);
};

export default Menu