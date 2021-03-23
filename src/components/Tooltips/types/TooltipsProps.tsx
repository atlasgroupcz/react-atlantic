import { FC } from 'react';
import { RefType } from '../../../types/Ref';

export type TooltipsProps = {
    contentAttr?: string;
    positionAttr?: string;
    hideTooltips?: boolean;
    transition?: string;
    Tooltip?: FC<{ ref: RefType<any>; positionAttr: string }>;
    borderPadding?: number;
};
