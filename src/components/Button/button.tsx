import React, { forwardRef } from 'react';
import classNames from 'classnames';
// import './_style.scss'

export type ButtonSize = "lg" | "sm";
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      btnType = 'default',
      className,
      disabled = false,
      size,
      children,
      href,
      ...restProps
    } = props;

    const classes = classNames('btn', className, {
      [`btn-${btnType}`]: btnType,
      [`btn-${size}`]: size,
      'disabled': (btnType === 'link' && disabled)
    });

    if (btnType === 'link' && href) {
      return (
        <a
          className={classes}
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...restProps}
        >
          {children}
        </a>
      );
    } else {
      return (
        <button
          className={classes}
          disabled={disabled}
          ref={ref as React.Ref<HTMLButtonElement>}
          {...restProps}
        >
          {children}
        </button>
      );
    }
  }
);

Button.displayName = 'Button';

export default Button;