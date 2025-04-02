import React from 'react';
import {
	RenderResult,
	cleanup,
	fireEvent,
	render,
} from '@testing-library/react';
import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

// 定义测试用的 Menu 组件属性
const testProps: MenuProps = {
	defaultIndex: '0', // 默认高亮的菜单项索引
	onSelect: jest.fn(), // 模拟的 onSelect 回调函数
	className: 'test', // 自定义类名
};
// 定义测试用的竖向模式 Menu 组件属性
const testVerProps: MenuProps = {
	defaultIndex: '0', // 默认高亮的菜单项索引
	mode: 'vertical', // 菜单模式为垂直
};

// 生成 Menu 组件的测试实例
const generateMenu = (props: MenuProps) => {
	return (
		<Menu {...props}>
			<MenuItem>active</MenuItem> {/* 默认激活的菜单项 */}
			<MenuItem disabled>disabled</MenuItem> {/* 禁用的菜单项 */}
			<MenuItem>xyz</MenuItem> {/* 普通菜单项 */}
			<SubMenu title='dropdown'>
				<MenuItem>  {/* 子菜单项 */}
					drop1
				</MenuItem>
			</SubMenu>
		</Menu>
	);
};

// 创建动态样式文件
const createStyleFile = () => {
	const cssFile: string = `
		.yjy-submenu {
			display: none;
		}
		.is-visible .yjy-submenu {
			display: block;
		}
	`
	const style = document.createElement('style')
	style.innerHTML = cssFile
	return style
}

// 定义测试中使用的变量
let wrapper: RenderResult, // 测试渲染结果
	menuElement: HTMLElement, // 菜单元素
	activeElement: HTMLElement, // 默认激活的菜单项
	disabledElement: HTMLElement; // 禁用的菜单项
describe('test Menu and MenuItem component', () => {
	// 在每个测试用例之前执行
	beforeEach(() => {
		// 渲染 Menu 组件
		wrapper = render(generateMenu(testProps));
		// 将动态样式插入到测试容器中
		wrapper.container.append(createStyleFile())
		// 获取菜单元素
		menuElement = wrapper.getByTestId('test-menu');
		// 获取默认激活的菜单项
		activeElement = wrapper.getByText('active');
		// 获取禁用的菜单项
		disabledElement = wrapper.getByText('disabled');
	});

	// 测试默认属性下的渲染是否正确
	it('should render correct Menu and MenuItem based on default props', () => {
		// 断言菜单元素在文档中
		expect(menuElement).toBeInTheDocument();
		// 断言菜单元素有正确的类名
		expect(menuElement).toHaveClass('yjy-menu test');

		expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4);
		// 断言默认激活的菜单项有正确的类名
		expect(activeElement).toHaveClass('menu-item is-active');
		// 断言禁用的菜单项有正确的类名
		expect(disabledElement).toHaveClass('menu-item is-disabled');
	});

	// 测试点击菜单项时是否正确地改变激活状态并调用回调函数
	it('click items should change active and call the right callback', () => {
		// 获取第三个菜单项
		const thirdItem = wrapper.getByText('xyz');
		// 模拟点击第三个菜单项
		fireEvent.click(thirdItem);
		// 断言第三个菜单项被激活
		expect(thirdItem).toHaveClass('is-active');
		// 断言默认激活的菜单项不再激活
		expect(activeElement).not.toHaveClass('is-active');
		// 断言 onSelect 回调函数被调用，并传入正确的索引
		expect(testProps.onSelect).toHaveBeenCalledWith("2");
		// 模拟点击禁用的菜单项
		fireEvent.click(disabledElement);
		// 断言禁用的菜单项没有被激活
		expect(disabledElement).not.toHaveClass('is-active');
		// 断言 onSelect 回调函数没有被调用
		expect(testProps.onSelect).not.toHaveBeenCalledWith("1");
	});

	// 测试垂直模式下的渲染是否正确
	it('should render vertical mode when mode is set to vertical', () => {
		// 清理之前的渲染结果
		cleanup();
		// 渲染垂直模式的 Menu 组件
		const wrapper = render(generateMenu(testVerProps));
		// 获取菜单元素
		const menuElement = wrapper.getByTestId('test-menu');
		// 断言菜单元素有垂直模式的类名
		expect(menuElement).toHaveClass('menu-vertical');
	});
	// 测试悬停子菜单时是否显示下拉菜单项
	it('should show dropdown items when hover on submenu', () => {
		// expect(wrapper.queryByText('drop1')).not.toBeVisible()
		// 初始状态下应该不存在或不可见
		expect(wrapper.queryByText('drop1')).toBeNull();
		// 悬停在 dropdown 上
		const dropdownElement = wrapper.getByText('dropdown')
		// 现在应该能看见 drop1
		fireEvent.mouseEnter(dropdownElement)
		expect(wrapper.queryByText('drop1')).toBeVisible()
		fireEvent.click(wrapper.getByText('drop1'))
		expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
		fireEvent.mouseLeave(dropdownElement)
		expect(wrapper.queryByText('drop1')).not.toBeVisible()
	})
});
