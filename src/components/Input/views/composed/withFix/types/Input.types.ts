import { ReactNode } from 'react';
import { InputProps } from '../../../base/types';

type ExtraFixInputProps = {
    prefix?: ReactNode;
    suffix?: ReactNode;
};

export type InputFixProps = InputProps & ExtraFixInputProps;
