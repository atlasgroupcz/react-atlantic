import React from 'react';
import { Link } from '../components/Typography/Link';
import { crossOut, disableOnEvent } from './disableOnEvent';

export default {
    title: 'Typography',
    component: Link,
    argTypes: {
        href: crossOut,
        ...disableOnEvent,
    },
};

export const LinkOverview = () => <Link href="https://agrp.dev">Link</Link>;
