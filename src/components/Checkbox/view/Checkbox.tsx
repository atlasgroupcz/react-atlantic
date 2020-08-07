import React, { FC, PropsWithChildren, useRef } from 'react';
import { CheckSimple } from '../../../Icons';
import {
    HiddenCheckbox,
    StyledCheckboxIcon,
    StyledCheckboxInputShown,
    StyledCheckboxLabel,
    StyledCheckboxMark,
    StyledCheckboxSpan,
} from './style';
import {
    CommonHTMLProps,
    HorizontalPositionWithDocs,
    MouseEvents,
} from '../../../types';
import { useChain, useSpring, useTrail } from 'react-spring/web';
import * as easings from 'd3-ease';

export type CheckboxType = FC<PropsWithChildren<CheckboxProps>>;

export type UseCheckboxArgs = {
    isDefaultChecked?: boolean;
    isPartiallyChecked?: boolean;
    isDisabled?: boolean;
};

export type CommonCheckboxProps = {
    isChecked?: boolean;
};

export type CheckboxProps = CommonCheckboxProps &
    Omit<UseCheckboxArgs, 'isDefaultChecked'> &
    CommonHTMLProps<HTMLInputElement> &
    MouseEvents<HTMLInputElement> &
    HorizontalPositionWithDocs;

export const Checkbox: CheckboxType = ({
    isPartiallyChecked,
    horizontalPosition = 'left',
    isDisabled,
    children,
    id,
    isChecked,
    className,
    ...props
}) => {
    const springRef = useRef(null);
    const springProps = useSpring({
        ref: springRef,
        x: isChecked ? 0 : 100,
        config: { easing: (t) => easings.easeCubicIn(t), duration: 125 },
    });

    const trailRef = useRef(null);
    const trail = useTrail(1, {
        ref: trailRef,
        opacity: isPartiallyChecked || isChecked ? 1 : 0,
        config: { duration: 125 },
    });

    useChain(isChecked ? [trailRef, springRef] : [springRef, trailRef], [
        0,
        isChecked ? 0.075 : 0.225,
    ]);

    console.log(isChecked);
    return (
        <StyledCheckboxLabel
            onClick={props.onClick}
            isChecked={isChecked}
            isDisabled={isDisabled}
            className={className}
            htmlFor={id}
            {...props}
        >
            {horizontalPosition === 'right' && children && (
                <StyledCheckboxSpan
                    position={horizontalPosition}
                    isDisabled={isDisabled}
                >
                    {children}
                </StyledCheckboxSpan>
            )}

            <HiddenCheckbox id={id} checked={isChecked} disabled={isDisabled} />
            <input type={'checkbox'} checked={isChecked} />
            <StyledCheckboxInputShown isDisabled={isDisabled}>
                {trail.map((style, index) => (
                    <StyledCheckboxMark
                        key={index}
                        style={style}
                        isDisabled={isDisabled}
                        isChecked={isChecked}
                        isPartiallyChecked={isPartiallyChecked}
                    >
                        <StyledCheckboxIcon
                            isDisabled={isDisabled}
                            isChecked={isChecked}
                            isPartiallyChecked={isPartiallyChecked}
                        >
                            <CheckSimple x={springProps.x} />
                        </StyledCheckboxIcon>
                    </StyledCheckboxMark>
                ))}
            </StyledCheckboxInputShown>

            {horizontalPosition === 'left' && children && (
                <StyledCheckboxSpan
                    position={horizontalPosition}
                    isDisabled={isDisabled}
                >
                    {children}
                </StyledCheckboxSpan>
            )}
        </StyledCheckboxLabel>
    );
};
