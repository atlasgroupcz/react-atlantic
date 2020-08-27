import { CommonHTMLProps, TypeWithDocs } from '../../../../types';
import { TextElement } from './TextElement';

export type TextProps = {
    element?: TextElement;
} & CommonHTMLProps &
    TypeWithDocs;
