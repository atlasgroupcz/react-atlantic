import React, { FC } from 'react';
import { DefaultRightHeaderLabelProps } from '../../../../../../../../../../types/DefaultRightHeaderLabelProps';
import { StyledDefaultRightHeaderLabelContainer } from './styles';
import { Text } from '../../../../../../../../../../../Typography';

export const TransferDefaultHeaderLabelView: FC<DefaultRightHeaderLabelProps> = ({
    optionsSize,
    valueSize,
    text,
}) => {
    return (
        <StyledDefaultRightHeaderLabelContainer>
            <Text>{text}</Text>
            <Text
                type={'primary'}
                element={'strong'}
            >{`${valueSize} z ${optionsSize}`}</Text>
        </StyledDefaultRightHeaderLabelContainer>
    );
};
