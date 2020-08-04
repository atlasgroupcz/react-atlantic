import * as React from 'react';
import { useClick } from '../../hooks/EventHandlers/useClick';
import { Size, Type } from '../../types';
import { StyledButton } from './Button.style';

export type ButtonType = Type | 'dashed';

export interface ButtonProps {
  onClick?: () => void;
  isDisabled?: boolean;
  isRound?: boolean;
  isFullWidth?: boolean;
  isTransparent?: boolean;
  /** primary | success | warning | error | dashed */
  type?: ButtonType;
  htmlType?: 'submit' | 'button';
  /** small | medium | large */
  size?: Size;
  /** custom className */
  className?: string;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (
  props: React.PropsWithChildren<ButtonProps>
) => {
  const {
    children,
    type,
    isDisabled,
    isRound,
    size,
    isFullWidth,
    isTransparent,
    htmlType,
    className
  } = props;
  const [animation, setAnimation] = React.useState<boolean>(false);

  const { onClick: hookOnClick } = useClick({
    deps: [props.onClick],
    onClick: props.onClick
  });

  const onClick = () => {
    setAnimation(true);
    hookOnClick();
  };

  return (
    <StyledButton
      type={htmlType}
      styleType={isDisabled ? 'default' : type}
      disabled={isDisabled}
      onClick={onClick}
      isRound={!!isRound}
      isTransparent={isTransparent}
      size={size as any}
      isFullWidth={!!isFullWidth}
      onAnimationEnd={() => setAnimation(false)}
      animationRunning={animation}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: 'medium',
  isFullWidth: false,
  isDisabled: false,
  isRound: false,
  type: 'default',
  htmlType: 'button'
};

Button.displayName = `Button`;
