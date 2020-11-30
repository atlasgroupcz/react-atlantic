import React, { FC, ReactElement } from 'react';
import { defaultIconFromType } from './utils';
import { StyledMessageContainer } from './style';
import { StyledMessageProps } from './types';
import { InnerRef } from '../../types/utils/InnerRef';

export interface MessageProps extends InnerRef<StyledMessageProps> {
    Icon?: ReactElement;
}

type MessageType = FC<MessageProps>;

export const Message: MessageType = ({
    children,
    type,
    Icon = defaultIconFromType(type),
    innerRef,
    isTransparent,
    ...ContainerProps
}) => {
    return (
        <StyledMessageContainer
            ref={innerRef}
            type={type}
            isTransparent={isTransparent}
            {...ContainerProps}
        >
            {Icon}
            {children}
        </StyledMessageContainer>
    );
};

Message.defaultProps = {
    type: 'default',
};
