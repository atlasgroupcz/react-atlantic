import { ButtonProps } from './Button.types';

export type PureButtonProps = Omit<ButtonProps, 'type' | 'htmlType'> & {
    atlanticType: ButtonProps['type'];
    type: JSX.IntrinsicElements['button']['type'];
};
