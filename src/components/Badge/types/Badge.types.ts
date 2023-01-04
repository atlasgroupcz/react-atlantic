import { ReactText } from 'react';
import { SizeWithDocs, TypeWithDocs } from '../../../types';
import { ElementProps } from '../../../types/utils';

export type BadgeProps = {
    children?: ReactText;
} & ElementProps &
    TypeWithDocs &
    SizeWithDocs;
