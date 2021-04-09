import React, { FC } from 'react';
import { wrap } from '../../../../../../../utils';
import { Icon } from '../../../../../../Icon';
import { Input, InputFixProps } from '../../../../../../Input';
import { useTransferContext } from '../../../../../context';
import { StyledTransferLeftDropdown } from '../../LeftSide';

export interface FilterInputProps {}
export type FilterInputType = FC<FilterInputProps>;

export const useDefaultTransferFilterInput = ({
    ...props
}: InputFixProps): InputFixProps => {
    const { value } = useTransferContext();

    console.log(value);

    return {
        suffix: (
            <StyledTransferLeftDropdown
                isTransferOpen={true}
                isIconVisible={!!value}
            >
                {value && (
                    <Icon name={`clear`} onClick={() => console.log('lol')} />
                )}
            </StyledTransferLeftDropdown>
        ),
        isFullWidth: true,
        ...props,
    };
};

export const ControlledDefaultTransferFilterInput = wrap(
    Input,
    useDefaultTransferFilterInput
);
