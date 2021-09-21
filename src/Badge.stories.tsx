import React from 'react';
import { Badge, Title, Text } from '.';

export default {
    title: 'Badge',
    component: Badge,
};

export const Intro = () => {
    return (
        <div>
            <section>
                <Title>Badge</Title>
                <Text>This is a motherfucking badge.</Text>
                <Badge>badge</Badge>
            </section>

            <section>
                <Title level={2}>Variants</Title>
                <Badge type="info">info</Badge>
                <Badge type="error">error</Badge>
                <Badge type="primary">primary</Badge>
                <Badge type="success">success</Badge>
                <Badge type="warning">warning</Badge>
            </section>
        </div>
    );
};
