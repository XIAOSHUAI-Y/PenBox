import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';

export interface MenuItemProps {
	index?: string; // 菜单项的索引
	disabled?: boolean; // 是否禁用菜单项
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
	const { index, disabled, className, style, children } = props;
  // 使用 useContext 获取 MenuContext 上下文的值
	const context = useContext(MenuContext);
	const classes = classNames('menu-item', className, {
		'is-disabled': disabled, // 如果禁用，添加 'is-disabled' 类
		'is-active': context.index === index && !disabled,
	});
	const handleClick = () => {
    // 如果菜单项未被禁用且存在 onSelect 回调函数，则调用 onSelect
		if (context.onSelect && !disabled && (typeof index === 'string')) {
			context.onSelect(index);
		}
	};
	return (
		<li
			className={classes}
			style={style}
			onClick={handleClick}>
			{children}
		</li>
	);
};

MenuItem.displayName = 'MenuItem'
export default MenuItem;
