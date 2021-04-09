import { ControllerTransferProps, TransferProps } from '../types';
import { OptionType } from '../../Select';
import React, { useCallback, useState } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { transferOptionClick } from '../utils';
import {
    ControlledDefaultTransferCancelButton,
    ControlledDefaultTransferSubmitButton,
    DefaultTransferFooter,
} from '../components/ShownTransfer/components';
import { wrap } from '../../../utils';
import { LeftSideList } from '../components/ShownTransfer/components/LeftSide/components';
import { useLeftSideList } from '../components/ShownTransfer/hooks/useLeftSideList';
import { ControlledDefaultTransferFilterInput } from '../components/ShownTransfer/components/FilterInput';
import { DefaultRightHeader } from '../components/ShownTransfer/components/RightHeader';
import { TransferList } from '../components/ShownTransfer/components/List/List';
import { useRightList } from './List';
import { NoResults } from '../components/ShownTransfer/components/NoResults';

const ControlledLeftSideTransferList = wrap(LeftSideList, useLeftSideList);
const ControlledRightContainer = wrap(TransferList, useRightList);

export const useTransfer = <T extends OptionType<string, string>>({
    options,
    defaultValue,
    isDisabled,
    ...args
}: ControllerTransferProps<T>): TransferProps<T> => {
    const [value, setValue] = useState<T[]>(defaultValue || []);
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleOutsideClick = useCallback(() => {
        setOpen(false);
    }, []);
    const ref = useOutsideClick<HTMLDivElement>(handleOutsideClick);

    const onOptionClick: ControllerTransferProps<T>['onOptionClick'] = (
        option
    ) => {
        if (!isDisabled) {
            setValue((prev) => transferOptionClick(option, prev));
        }
    };

    return {
        ...args,
        options,
        value,
        onOptionClick,
        setValue,
        leftHeader: <ControlledDefaultTransferFilterInput />,
        leftContainer: <ControlledLeftSideTransferList />,
        rightHeader: <DefaultRightHeader />,
        rightContainer: <ControlledRightContainer />,
        footer: (
            <DefaultTransferFooter
                submitComponent={
                    <ControlledDefaultTransferSubmitButton>
                        Potvrdit
                    </ControlledDefaultTransferSubmitButton>
                }
                cancelComponent={
                    <ControlledDefaultTransferCancelButton>
                        Zavřít
                    </ControlledDefaultTransferCancelButton>
                }
            />
        ),
        noResults: args.noResults || <NoResults />,
        setOpen,
        isOpen,
        ref,
        isDisabled,
    };
};
