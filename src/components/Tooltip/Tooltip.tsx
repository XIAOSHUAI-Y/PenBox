import React, { useState } from 'react';
import './tooltip.scss';

export interface TooltipProps {
	content: string | React.ReactNode;
	children: React.ReactNode;
	position?: 'top' | 'bottom' | 'left' | 'right';
	showArrow?: boolean; // 是否显示箭头
	theme?:
		| 'light'
		| 'dark'
		| 'primary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'glass'
		| 'minimal'
		| 'soft'; // 主题颜色
	disabled?: boolean; // 是否禁用
	className?: string; // 自定义类名
}

const Tooltip: React.FC<TooltipProps> = ({
	content,
	children,
	position = 'bottom',
  showArrow = true,
  theme = 'light',
  disabled = false,
  className = ''
}) => {
	const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    if (!disabled) setVisible(true);
  };

  const handleMouseLeave = () => {
    if (!disabled) setVisible(false);
  };

	return (
		<div
			className={`tooltip-container ${theme} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
		>
			{children}
			{visible && <div className={`tooltip ${position}`}>{content}</div>}
		</div>
	);
};

export default Tooltip;

