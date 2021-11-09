import { OptionType } from '../../Select';
import { TransferProps } from './Transfer';

export type LeftSideProps = {} & Pick<
    TransferProps<OptionType<string, any>>,
    'size' | 'visibleRows' | 'options' | 'noResults' | 'isDisabled'
>;
