import React, { FC } from 'react';
import { MockComponentProps } from './MockComponent';

export type MockComponentWithChildrenType = FC<MockComponentProps>;

export const MockComponentWithChildren: MockComponentWithChildrenType = ({
    mockString,
    children,
}) => {
    return (
        <div>
            {mockString}
            {children}
        </div>
    );
};
