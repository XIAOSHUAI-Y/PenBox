import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType } from './button';
import '@testing-library/jest-dom';

const defaultProps = {
   // 创建一个被监控的模拟函数
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}
// 描述测试套件
describe('test Button component', () => {
  // 测试默认按钮的渲染和行为
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument(); // 断言按钮在文档中
    expect(element.tagName).toEqual('BUTTON'); // 断言按钮的标签名是 BUTTON
    expect(element).toHaveClass('btn btn-default'); // 断言按钮有默认的类名
    expect(element.disabled).toBeFalsy(); // 断言按钮未被禁用
    fireEvent.click(element); // 模拟点击按钮
    expect(defaultProps.onClick).toHaveBeenCalled(); // 断言点击事件被触发
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={'link'} href='https://baidu'>Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})