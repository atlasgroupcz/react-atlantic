import { ReactText } from 'react';

export type PaginationComponentProps<T extends Element = Element> = {
    onClick?: (e: React.MouseEvent<T, MouseEvent>) => void;
    children?: ReactText;
    isActive?: boolean;
};
