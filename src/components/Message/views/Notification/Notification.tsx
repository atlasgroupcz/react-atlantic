import React, { FC, ReactElement } from 'react';
import { defaultIconFromType } from './utils';
import {
    StyledNotification,
    StyledNotificationMainContainer,
    StyledNotificationIconContainer,
    StyledNotificationTextContainer,
} from './styles';
import { InnerRef } from '../../../../types/utils/InnerRef';
import { Text } from '../../../Typography';
import { MessageProps } from '../../types';
import { Link } from '../../../Typography/Link';

export type NotificationViewProps = {
    Icon?: ReactElement;
    description?: String;
    link?: String;
} & InnerRef<MessageProps>;

export type NotificationViewType = FC<NotificationViewProps>;

export const NotificationView: NotificationViewType = ({
    children,
    className,
    type = 'default',
    innerRef,
    Icon = defaultIconFromType(type),
    description,
    link,
    ...ContainerProps
}) => {
    return (
        <StyledNotification
            className={className}
            ref={innerRef}
            type={type}
            {...ContainerProps}
        >
            <StyledNotificationIconContainer>
                {Icon}
            </StyledNotificationIconContainer>
            <StyledNotificationMainContainer>
                <StyledNotificationTextContainer>
                    <Text element="strong">{children}</Text>
                    {description && <Text>{description}</Text>}
                </StyledNotificationTextContainer>
                {link && (
                    <Link
                        href={`${link}`}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        Více
                    </Link>
                )}
            </StyledNotificationMainContainer>
        </StyledNotification>
    );
};
