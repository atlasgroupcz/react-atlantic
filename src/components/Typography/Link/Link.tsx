import { StyledLink } from './styles';
import { CommonHTMLProps, MouseEvents } from '../../../types';
import { ElementProps } from '../../../types/utils';

type AnchorProps = Pick<
    ElementProps<HTMLAnchorElement>,
    'href' | 'rel' | 'target'
>;

export type LinkProps = CommonHTMLProps<HTMLAnchorElement> &
    MouseEvents<HTMLAnchorElement> &
    AnchorProps;

export const Link = StyledLink;
