import { ReactNode } from 'react';
import { InputProps } from './Base.type';

type InputDefaultSideProps = {
    prefix?: ReactNode;
    suffix?: ReactNode;
};

export type InputDefaultProps = InputProps & InputDefaultSideProps;
