import { InputDefaultProps } from './Default.type';
import { ReactNode } from 'react';

export type InputFloatingLabelProps = InputDefaultProps & {
    label?: ReactNode;
};
