import React from 'react'
import classNames from 'classnames'

// 创建枚举,定义按钮的尺寸
export type ButtonSize = "lg" | "sm"
// 创建枚举，定义按钮的类型
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

// 定义按钮的基础属性接口
interface BaseButtonProps {
  className?: string,
  disabled?: boolean, // 是否禁用
  size?: ButtonSize,
  btnType?: ButtonType,
  children: React.ReactNode, // 按钮内容
  href?: string
}
// 结合基础属性和 HTML 按钮属性
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
// 结合基础属性和 HTML 超链接属性
type AnchorButtonprops = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// 结合原生按钮和链接按钮的属性，并使用 Partial 使所有属性可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonprops>

// 定义 Button 组件
const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType = 'default',
    className,
    disabled  = false,// 默认不禁用按钮
    size,
    children,
    href,
    ...restProps // 其他属性（如 onClick、style 等）
  } = props

  // 使用 classnames 库动态生成按钮的类名
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link' && disabled) // 如果是链接按钮且禁用，添加 disabled 类
  })
  // 如果是链接按钮且提供了 href，渲染 <a> 标签
  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    // 否则渲染普通的 <button> 标签
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

export default Button