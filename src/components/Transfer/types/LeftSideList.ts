import { TransferProps } from './Transfer';

export type LeftSideProps = {} & Pick<
    TransferProps,
    'size' | 'visibleRows' | 'options' | 'noResults' | 'isDisabled'
>;
