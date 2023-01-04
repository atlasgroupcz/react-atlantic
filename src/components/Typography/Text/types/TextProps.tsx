import { MouseEvents, TypeWithDocs } from '../../../../types';
import { TextElement } from './TextElement';
import { ElementProps } from '../../../../types/utils';

export type TextProps = {
    element?: TextElement;
} & MouseEvents<HTMLElement> &
    ElementProps &
    TypeWithDocs;
