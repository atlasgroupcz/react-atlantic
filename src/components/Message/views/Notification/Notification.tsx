import React, { FC, ReactElement } from 'react';
import { defaultIconFromType } from './utils';
import {
    StyledNotificationContainer,
    StyledNotificationIconContainer,
    StyledNotificationTextContainer,
} from './styles';
import { MessageProps } from '../../types';
import { InnerRef } from '../../../../types/utils/InnerRef';
import { Text } from '../../../Typography';

export type NotificationViewProps = {
    Icon?: ReactElement;
} & InnerRef<MessageProps>;

export type NotificationViewType = FC<NotificationViewProps>;

export const NotificationView: NotificationViewType = ({
    children,
    className,
    type = 'default',
    innerRef,
    Icon = defaultIconFromType(type),
    ...ContainerProps
}) => {
    return (
        <StyledNotificationContainer
            className={className}
            ref={innerRef}
            type={type}
            {...ContainerProps}
        >
            <StyledNotificationIconContainer>
                {Icon}
            </StyledNotificationIconContainer>
            <StyledNotificationTextContainer>
                <Text>{children}</Text>
            </StyledNotificationTextContainer>
        </StyledNotificationContainer>
    );
};
