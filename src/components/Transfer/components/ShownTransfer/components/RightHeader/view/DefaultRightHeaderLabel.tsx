import React, { FC } from 'react';
import { wrap } from '../../../../../../../utils';
import { Text } from '../../../../../../Typography';
import {
    useInnerTransferContext,
    useTransferContext,
} from '../../../../../context';
import { DefaultRightHeaderLabelProps } from '../../../../../types/DefaultRightHeaderLabelProps';

const useDefaultRightHeaderLabel = (
    props: Pick<DefaultRightHeaderLabelProps, 'text'>
): DefaultRightHeaderLabelProps => {
    const { options } = useTransferContext();
    const { innerValue } = useInnerTransferContext();

    const optionsSize = options.length;
    const valueSize = innerValue?.length ?? 0;

    return { optionsSize, valueSize, ...props };
};

export const DefaultRightHeaderLabel: FC<DefaultRightHeaderLabelProps> = ({
    optionsSize,
    valueSize,
    text,
}) => {
    return (
        <React.Fragment>
            <Text>{text}</Text>
            <Text
                type={'primary'}
                element={'strong'}
            >{`${valueSize} z ${optionsSize}`}</Text>
        </React.Fragment>
    );
};

export const ControlledDefaultRightHeaderLabel = wrap(
    DefaultRightHeaderLabel,
    useDefaultRightHeaderLabel
);
