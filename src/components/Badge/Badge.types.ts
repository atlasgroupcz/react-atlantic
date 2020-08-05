import { ReactText } from 'react';
import { CommonHTMLProps, SizeWithDocs, TypeWithDocs } from '../../types';

export type BadgeProps = {
    children?: ReactText;
} & CommonHTMLProps &
    TypeWithDocs &
    SizeWithDocs;
