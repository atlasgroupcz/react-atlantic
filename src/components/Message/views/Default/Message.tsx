import React, { FC, ReactElement } from 'react';
import { defaultIconFromType } from './utils';
import { StyledMessageContainer } from './styles';
import { MessageProps } from '../../types';
import { InnerRef } from '../../../../types/utils/InnerRef';
import { Text } from '../../../Typography';

export interface MessageViewProps extends InnerRef<MessageProps> {
    Icon?: ReactElement;
}

export type MessageViewType = FC<MessageViewProps>;

export const MessageView: MessageViewType = ({
    children,
    className,
    type = 'default',
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
            data-type={type}
            data-is-reversed-color={isReversedColor}
            {...ContainerProps}
        >
            {Icon}
            <Text>{children}</Text>
        </StyledMessageContainer>
    );
};
