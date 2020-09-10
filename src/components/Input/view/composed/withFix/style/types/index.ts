import { InputProps } from '../../../../base/types';

export type StyledComposedInputProps = {
    isPrefix: boolean;
    isSuffix: boolean;
} & Pick<InputProps, 'isFullWidth'>;
