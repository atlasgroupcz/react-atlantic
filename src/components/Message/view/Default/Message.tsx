import React, { FC, ReactElement } from 'react';
import { defaultIconFromType } from './utils';
import { StyledMessageContainer } from './styles';
import { StyledMessageProps } from '../../types';
import { InnerRef } from '../../../../types/utils/InnerRef';
import { Text } from '../../../Typography';

export interface MessageProps extends InnerRef<StyledMessageProps> {
    Icon?: ReactElement;
}

type MessageType = FC<MessageProps>;

export const Message: MessageType = ({
    children,
    className,
    type,
    innerRef,
    isTransparent,
    Icon = defaultIconFromType(type, isTransparent),
    ...ContainerProps
}) => {
    return (
        <StyledMessageContainer
            className={className}
            ref={innerRef}
            type={type}
            isTransparent={isTransparent}
            {...ContainerProps}
        >
            {Icon}
            <Text>{children}</Text>
        </StyledMessageContainer>
    );
};

Message.defaultProps = {
    type: 'default',
};
