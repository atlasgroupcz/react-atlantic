import React, { FC, ReactElement } from 'react';
import { defaultIconFromType } from './utils';
import { StyledMessageLightContainer } from './styles';
import { MessageProps } from '../../types';
import { InnerRef } from '../../../../types/utils/InnerRef';
import { Text } from '../../../Typography';
export type MessageLightProps extends InnerRef<MessageProps> {
    Icon?: ReactElement;
}

type MessageLightType = FC<MessageLightProps>;

export const MessageLight: MessageLightType = ({
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
