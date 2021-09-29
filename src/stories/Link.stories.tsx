import React from 'react';
import styled from 'styled-components';
import { Link as NotStyledLink } from '../components/Typography/Link';
import { disable, disableOnEvent } from './disableOnEvent';

export default {
    title: 'Typography - Link',
    component: NotStyledLink,
    argTypes: {
        href: {
            name: 'href',
            control: { type: 'text' },
            defaultValue: 'https://www.agrp.dev',
        },
        theme: disable,
        as: disable,
        forwardRef: disable,
        forwardedAs: disable,
        ...disableOnEvent,
    },
};

const Link = styled(NotStyledLink)`
    color: ${({ theme }) => theme.color.text.gamma};
`;

export const Overview = ({ href }: { href: string }) => (
    <Link href={href}>Link</Link>
);
