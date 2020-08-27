import React from 'react';
import { WrapCurried } from './wrap.types';

//TODO!: make better types please :]

/**
 * View - target component -> wrap with HoC
 * hook - value of hook | hook which will be called inside
 * viewChildren - children of View -> actually can be also HoC
 */
export const wrapCurried_DEPRECATED: WrapCurried = (View) => (
    hook,
    viewChildren
) => {
    if (typeof hook === 'function') {
        return (props) => {
            const hookProps = hook({});
            return (
                <View {...hookProps} {...props}>
                    {viewChildren}
                </View>
            );
        };
    } else if (Array.isArray(hook)) {
        return (props) => {
            /**
             * Here props will not affect state of hook
             * For instance hook of Collapse has state of isAccordion setted as true and props will trigger false then * happens nothing :] [slash] Will affect -> is it ok? :]
             * Take care of this pls :]
             */
            const [hookFn, hookDeProps] = hook;
            const hookProps = hookFn({ ...hookDeProps, ...props });
            return (
                <View {...hookProps} {...props}>
                    {viewChildren}
                </View>
            );
        };
    }
    return (props) => (
        <View {...hook} {...props}>
            {viewChildren}
        </View>
    );
};
