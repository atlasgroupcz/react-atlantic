import React, { FC } from 'react';
import { StyledLink } from './Link.style';
import { CommonHTMLProps, MouseEvents } from '../../../types';
import { ElementProps } from '../../../types/utils';

export type LinkType = FC<Readonly<LinkProps>>;

type AnchorProps = Pick<
    ElementProps<HTMLAnchorElement>,
    'href' | 'rel' | 'target'
>;

export type LinkProps = CommonHTMLProps<HTMLAnchorElement> &
    MouseEvents<HTMLAnchorElement> &
    AnchorProps;

export const Link: LinkType = (props) => <StyledLink {...props} />;
