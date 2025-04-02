// import { IconProp } from '@fortawesome/fontawesome-svg-core';
// import classNames from 'classnames';
// import React, { ReactElement, InputHTMLAttributes, FC } from 'react'
// import Icon from '../Icon/icon';
// // import './_style.scss'

// export type InputSize = 'lg' | 'sm'
// /* 这里从InputHTMLAttributes扩展的时候，InputHTMLAttributes中已经存在了属性size并且类型与我们定义的不同，
// 所以这里我们再定义属性size就会报错，有两个解决方案，
// 一：更换我们定义的size的命名；
// 二：使用typescript内置的Omit，忽略接口中的size, Omit<接口, string（所需忽略的东西）>
// */
// export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
//   disabled?: boolean;
//   size?: InputSize;
//   icon?: IconProp;
//   prepend?: string | ReactElement;
//   append?: string | ReactElement;
// }

// export const Input: FC<InputProps> = (props) => {
//   // 取出各种属性
//     const {
//       disabled = false,
//       size,
//       icon,
//       prepend,
//       append,
//       style,
//       ...restProps
//     } = props
//   // 根据属性计算不同的 className
//   const classes = classNames('yjy-input-wrapper',  {
//     [`input-size-${size}`]: size,
//     'is-disabled': disabled,
//     'input-group': prepend || append,
//     'input-group-append': !!append,
//     'input-group-prepend': !!prepend
//   })

//   return (
//     // 根据属性判断是否添加特定的节点
//     <div className={classes} style={style}>
//       {prepend && <div className='yjy-input-group-prepend'>{prepend}</div>}
//       {icon && <div className='icon-wrapper'><Icon icon={icon} title={`title-${icon}`}/></div>}
//       <input className="yjy-input-inner" disabled={disabled} {...restProps} />
//       {append && <div className='yjy-input-group-append'>{append}</div>}
//     </div>
//   )
// }


// export default Input;

import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent, useState } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size' > {
  /**是否禁用 Input */
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement;
  onChange? : (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 * 
 * 
 * 支持 HTMLInput 的所有基本属性
 */
export const Input: FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    onChange,
    ...restProps
  } = props
  const cnames = classNames('yjy-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }

  const [internalValue, setInternalValue] = useState(props.value || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setInternalValue(e.target.value);
      onChange?.(e);
    }
  };
  return (
    <div className={cnames} style={style}>
      {prepend && <div className="yjy-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
      <input 
        className="yjy-input-inner"
        disabled={disabled}
        value={internalValue}
        onChange={handleChange}
        {...restProps}
      />
      {append && <div className="yjy-input-group-append">{append}</div>}
    </div>
  )
}

export default Input;