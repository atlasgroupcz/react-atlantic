import React from 'react';
import { Link } from '../components/Typography/Link';
import { crossOut, disable, disableOnEvent } from './disableOnEvent';

export default {
    title: 'Typography',
    component: Link,
    argTypes: {
        element: disable,
        level: disable,
        as: disable,
        theme: disable,
        forwardedAs: disable,
        href: crossOut,
        ...disableOnEvent,
    },
};

export const LinkOverview = () => <Link href="https://agrp.dev">Link</Link>;
