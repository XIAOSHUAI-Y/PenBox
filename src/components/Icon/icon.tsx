import React from "react"
import classNames from "classnames"
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'


// 定义主题类型，支持多种主题
export type ThemProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemProps
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props
  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme //传入theme的时候，添加icon-theme类名
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

export default Icon