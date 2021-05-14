import React, { FC, ReactElement } from 'react';
import { defaultIconFromType } from '../Light/utils';
import { StyledLightMessageContainer } from './styles';
import { StyledMessageProps } from '../../types';
import { InnerRef } from '../../../../types/utils/InnerRef';
import { Text } from '../../../Typography';

export interface LightMessageProps extends InnerRef<StyledMessageProps> {
    Icon?: ReactElement;
}

type LightMessageType = FC<LightMessageProps>;

export const LightMessage: LightMessageType = ({
    children,
    className,
    type,
    innerRef,
    Icon = defaultIconFromType(type),
    ...ContainerProps
}) => {
    return (
        <StyledLightMessageContainer
            className={className}
            ref={innerRef}
            type={type}
            {...ContainerProps}
        >
            {Icon}
            <Text>{children}</Text>
        </StyledLightMessageContainer>
    );
};

LightMessage.defaultProps = {
    type: 'default',
};
