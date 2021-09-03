import { CommonHTMLProps, MouseEvents, TypeWithDocs } from '../../../../types';
import { TextElement } from './TextElement';

export type TextProps = {
    element?: TextElement;
} & MouseEvents<HTMLElement> &
    CommonHTMLProps &
    TypeWithDocs;
