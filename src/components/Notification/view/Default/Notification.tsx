import React, { FC, ReactElement, ReactChild } from 'react';
import { defaultIconFromType } from '../../utils';
import {
    StyledNotification,
    StyledNotificationMainContainer,
    StyledNotificationIconContainer,
    StyledNotificationTextContainer,
} from './styles';
import { InnerRef } from '../../../../types/utils/InnerRef';
import { Text } from '../../../Typography';
import { NotificationProps } from '../../types';

export type NotificationViewProps = {
    Icon?: ReactElement;
    MoreLink?: ReactChild;
    description?: String;
} & InnerRef<NotificationProps>;

export type NotificationViewType = FC<NotificationViewProps>;

export const NotificationView: NotificationViewType = ({
    children,
    type = 'default',
    innerRef,
    Icon = defaultIconFromType(type),
    description,
    MoreLink,
    ...ContainerProps
}) => {
    return (
        <StyledNotification ref={innerRef} type={type} data-type={type} {...ContainerProps}>
            <StyledNotificationIconContainer>{Icon}</StyledNotificationIconContainer>
            <StyledNotificationMainContainer>
                <StyledNotificationTextContainer>
                    <Text element="strong">{children}</Text>
                    {description && <Text>{description}</Text>}
                </StyledNotificationTextContainer>
                {MoreLink}
            </StyledNotificationMainContainer>
        </StyledNotification>
    );
};
