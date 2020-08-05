import {
    CommonHTMLProps,
    SizeWithDocs,
    TypeWithDocs,
    WithoutChildren,
} from '../../types';

export type IndicatorProps = WithoutChildren<
    CommonHTMLProps<HTMLElement> & TypeWithDocs & SizeWithDocs
>;
