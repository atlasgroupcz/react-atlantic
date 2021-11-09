import { OptionType } from '../../src/components/Select';
import { TransferProps } from '../../src/components/Transfer';

export type TestComponentProps = {
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
} & Pick<TransferProps<OptionType<string, any>>, 'preferredPosition'>;
