import React, { useRef } from 'react';
import { CheckSimple } from '../../../../Icons';
import {
    HiddenCheckbox,
    StyledCheckboxIcon,
    StyledCheckboxInputShown,
    StyledCheckboxLabel,
    StyledCheckboxMark,
    StyledCheckboxSpan,
} from './style';
import { useChain, useSpring, useTrail } from 'react-spring';
import * as easings from 'd3-ease';
import { CheckboxType } from '../../types';

export const Checkbox: CheckboxType = ({
    isPartiallyChecked,
    horizontalPosition = 'left',
    isDisabled,
    children,
    id,
    isChecked,
    className,
    size = 'small',
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

    return (
        <StyledCheckboxLabel
            isChecked={isChecked}
            isDisabled={isDisabled}
            className={className}
            htmlFor={id}
            size={size}
        >
            {horizontalPosition === 'right' && children && (
                <StyledCheckboxSpan
                    position={horizontalPosition}
                    isDisabled={isDisabled}
                    size={size}
                >
                    {children}
                </StyledCheckboxSpan>
            )}

            <HiddenCheckbox
                id={id}
                readOnly
                defaultChecked={isChecked}
                disabled={isDisabled}
                {...props}
            />
            <StyledCheckboxInputShown isDisabled={isDisabled}>
                {trail.map((style: unknown, index) => (
                    <StyledCheckboxMark
                        key={index}
                        style={style as any}
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
                    size={size}
                >
                    {children}
                </StyledCheckboxSpan>
            )}
        </StyledCheckboxLabel>
    );
};
