import React from 'react';
import { Badge, Title, Text } from '..';
import { StoriesComponentContainer } from './styles';

export default {
    title: 'Badge',
    component: Badge,
};

export const Overview = () => (
    <>
        <Title>Badge</Title>
        <Text>
            The Badge comes with six types: default | primary | success |
            warning | error | info.
        </Text>

        <StoriesComponentContainer>
            <Badge>default</Badge>
            <Badge type="primary">primary</Badge>
            <Badge type="success">success</Badge>
            <Badge type="warning">warning</Badge>
            <Badge type="error">error</Badge>
            <Badge type="info">info</Badge>
        </StoriesComponentContainer>

        <Text>Also, it has tree different sizes: small | medium | large.</Text>

        <StoriesComponentContainer>
            <Badge type="info" size="small">
                small
            </Badge>
            <Badge type="info" size="medium">
                medium
            </Badge>
            <Badge type="info" size="large">
                large
            </Badge>
        </StoriesComponentContainer>
    </>
);
