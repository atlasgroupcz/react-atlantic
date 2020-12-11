import { FC } from 'react';
import {
    CommonHTMLProps,
    MouseEvents,
    SizeWithDocs,
    Type,
    TypeWithDocs,
} from '../../../types';

export type ButtonStyleType = Type | 'dashed';

type ButtonTypeWithDocs =
    | TypeWithDocs
    | {
          /** dashed */
          type?: ButtonStyleType;
      };

export type ButtonProps = {
    isRound?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isTransparent?: boolean;
} & CommonHTMLProps<HTMLButtonElement> &
    MouseEvents<HTMLButtonElement> &
    SizeWithDocs &
    ButtonTypeWithDocs & {
        htmlType?: JSX.IntrinsicElements['button']['type'];
    } & {
        as?: keyof JSX.IntrinsicElements | FC<any>;
    };
