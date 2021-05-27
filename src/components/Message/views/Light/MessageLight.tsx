import React, { FC, ReactElement } from 'react';
import { defaultIconFromType } from './utils';
import { StyledMessageLightContainer } from './styles';
import { StyledMessageProps } from '../../types';
import { InnerRef } from '../../../../types/utils/InnerRef';
import { Text } from '../../../Typography';
export interface MessageLightViewProps extends InnerRef<StyledMessageProps> {
    Icon?: ReactElement;
}

type MessageLightViewType = FC<MessageLightViewProps>;

export const MessageLightView: MessageLightViewType = ({
    children,
    className,
    type = 'default',
    innerRef,
    Icon = defaultIconFromType(type),
    ...ContainerProps
}) => {
    return (
        <StyledMessageLightContainer
            className={className}
            ref={innerRef}
            type={type}
            {...ContainerProps}
        >
            {Icon}
            <Text>{children}</Text>
        </StyledMessageLightContainer>
    );
};
