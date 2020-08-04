import { CommonHTMLProps } from '../CommonHTMLProps';
import { ElementProps } from './ElementProps';
import { PartitionProps } from './PartitionProps';

/**
 * Implements PartitionProps, second argument only accepts a HTML element type. The last argument is left optional, falls back to CommonHTMLProps
 **/
export type PartitionCommonHTMLProps<
    MainProps extends {},
    RestProps extends ElementProps<HTMLElement>,
    PropsToMove extends keyof RestProps = CommonHTMLProps
> = PartitionProps<MainProps, RestProps, PropsToMove>;
