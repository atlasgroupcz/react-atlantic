import React, {
    forwardRef,
    MutableRefObject,
    ReactElement,
    ReactNode,
    RefObject,
    useMemo,
    useRef,
} from 'react';
import { StyledTimelineContainer } from './style';
import { TimelineProps, TimelineType } from './Timeline.types';
import { HorizontalPosition } from '../../../types';
import { TimelineItemProps } from './Item/Item.types';
import { getAlign } from './utils/getAlign';
import { TimelineItem } from '.';
import {
    defaultTimelineContextValue,
    TimelineContextState,
    TimelineProvider,
} from '../context';

export const Timeline: TimelineType = forwardRef(
    ({ children, align = 'right', ...props }, ref) => {
        const isOppositeContent = useRef<
            TimelineContextState['isOppositeContent']
        >(defaultTimelineContextValue.isOppositeContent);

        const modifiedChildren = useMemo(
            () =>
                React.Children.toArray(children).map(
                    mapChild(align, isOppositeContent)
                ),
            [children, align]
        );

        return (
            <TimelineProvider isOppositeContent={isOppositeContent.current}>
                <StyledTimelineContainer {...props} ref={ref}>
                    {modifiedChildren}
                </StyledTimelineContainer>
            </TimelineProvider>
        );
    }
);

type ReactNodeExcluded = Exclude<ReactNode, boolean | null | undefined>;
const mapChild = (
    parentAlign: TimelineProps['align'],
    isOppositeContentRef: MutableRefObject<
        TimelineContextState['isOppositeContent']
    >
) => (value: ReactNodeExcluded, index: number) => {
    if (React.isValidElement(value)) {
        const assumed = value as ReactElement<TimelineItemProps>;

        if (!isOppositeContentRef.current && !!assumed.props.oppositeContent) {
            isOppositeContentRef.current = true;
        }

        const modifiedOnClick = getModifiedOnClick(assumed, index);
        const modifiedAlign = getModifiedAlign(parentAlign, assumed, index);

        return React.cloneElement(assumed, {
            ...assumed.props,
            onClick: modifiedOnClick,
            align: modifiedAlign,
        });
    } else {
        return null;
    }
};

//TODO: in new typescript 4.0 make label tuple :], fuck rest parameter last in parametr list :(
type ModificationProps = [ReactElement<any>, number];

type GetModifiedAlign = (
    align: TimelineProps['align'],
    ...args: ModificationProps
) => HorizontalPosition;
const getModifiedAlign: GetModifiedAlign = (parentAlign, element, index) => {
    return element?.props?.align ?? getAlign(parentAlign, index);
};

type GetModifiedOnClick = (...args: ModificationProps) => any;
const getModifiedOnClick: GetModifiedOnClick = (element, index) => {
    return typeof element?.props?.onClick !== 'undefined'
        ? (e: React.MouseEvent<HTMLElement, MouseEvent>) =>
              element.props.onClick(e, element.props?.unique ?? index)
        : undefined;
};

Timeline.displayName = 'Timeline';
Timeline.Item = TimelineItem;
