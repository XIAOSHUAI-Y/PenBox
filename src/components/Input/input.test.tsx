import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Input from './input';
import '@testing-library/jest-dom';

const defaultProps = {
  onChange: jest.fn()
};

const disabledProps = {
  disabled: true,
  onChange: jest.fn()
};

const withIconProps = {
  icon: faSearch,  // 使用正确的 IconProp 类型
  onChange: jest.fn()
};

const withPrependProps = {
  prepend: 'https://',
  onChange: jest.fn()
};

const withAppendProps = {
  append: '.com',
  onChange: jest.fn()
};

describe('test Input component', () => {
  it('should render the correct default input', () => {
    const wrapper = render(<Input {...defaultProps} placeholder="请输入内容" />);
    const element = wrapper.getByPlaceholderText('请输入内容') as HTMLInputElement;
    
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('INPUT');
    expect(element).toHaveClass('yjy-input-inner');
    expect(element.disabled).toBeFalsy();
    
    fireEvent.change(element, { target: { value: 'test' } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('should render disabled input when disabled set to true', () => {
    const wrapper = render(<Input {...disabledProps} placeholder="禁用输入框" />);
    const element = wrapper.getByPlaceholderText('禁用输入框') as HTMLInputElement;
    
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    
    fireEvent.change(element, { target: { value: 'test' } });
    expect(disabledProps.onChange).not.toHaveBeenCalled();
  });

  it('should render input with icon', () => {
    const wrapper = render(<Input {...withIconProps} placeholder="带图标的输入框" />);
    const element = wrapper.getByPlaceholderText('带图标的输入框');
    const iconElement = wrapper.container.querySelector('.icon-wrapper');
    
    expect(element).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it('should render input with prepend', () => {
    const wrapper = render(<Input {...withPrependProps} placeholder="带前缀的输入框" />);
    const element = wrapper.getByPlaceholderText('带前缀的输入框');
    const prependElement = wrapper.container.querySelector('.yjy-input-group-prepend');
    
    expect(element).toBeInTheDocument();
    expect(prependElement).toBeInTheDocument();
    expect(prependElement).toHaveTextContent('https://');
  });

  it('should render input with append', () => {
    const wrapper = render(<Input {...withAppendProps} placeholder="带后缀的输入框" />);
    const element = wrapper.getByPlaceholderText('带后缀的输入框');
    const appendElement = wrapper.container.querySelector('.yjy-input-group-append');
    
    expect(element).toBeInTheDocument();
    expect(appendElement).toBeInTheDocument();
    expect(appendElement).toHaveTextContent('.com');
  });

  it('should render different size inputs', () => {
    const wrapperSm = render(<Input size="sm" placeholder="小尺寸输入框" />);
    const wrapperLg = render(<Input size="lg" placeholder="大尺寸输入框" />);
    
    const elementSm = wrapperSm.getByPlaceholderText('小尺寸输入框');
    const elementLg = wrapperLg.getByPlaceholderText('大尺寸输入框');
    
    expect(elementSm).toBeInTheDocument();
    expect(elementLg).toBeInTheDocument();
    expect(elementSm.parentElement).toHaveClass('input-size-sm');
    expect(elementLg.parentElement).toHaveClass('input-size-lg');
  });

  it('should handle controlled value', () => {
    const wrapper = render(<Input value="初始值" onChange={defaultProps.onChange} />);
    const element = wrapper.getByDisplayValue('初始值') as HTMLInputElement;
    
    expect(element.value).toEqual('初始值');
    
    fireEvent.change(element, { target: { value: '新值' } });
    expect(defaultProps.onChange).toHaveBeenCalled();
    // 对于受控组件，值不会自动更新，需要父组件更新props
  });
});