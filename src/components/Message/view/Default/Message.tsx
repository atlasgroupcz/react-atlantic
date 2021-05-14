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
    isReversedColor,
    Icon = defaultIconFromType(type, isReversedColor),
    ...ContainerProps
}) => {
    return (
        <StyledMessageContainer
            className={className}
            ref={innerRef}
            type={type}
            isReversedColor={isReversedColor}
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
