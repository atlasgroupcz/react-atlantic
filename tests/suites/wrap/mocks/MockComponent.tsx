import React, { FC } from 'react';
import { PropsWithoutChildren } from '../../../../src';

export interface MockComponentProps {
    mockString: string;
}
export type MockComponentType = FC<PropsWithoutChildren<MockComponentProps>>;

export const MockComponent: MockComponentType = ({ mockString }) => {
    return <div>{mockString}</div>;
};
