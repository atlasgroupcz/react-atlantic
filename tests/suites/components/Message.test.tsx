import React from 'react';
import { Message, MessageProps } from '../../../src';
import { mockPropsCheckTest, mountTest, toBeDefinedTest } from '../../shared';

const mockMessageProps: MessageProps = {
    type: 'success',
    Icon: <>test</>,
};

describe('Message', () => {
    mountTest(Message);
    toBeDefinedTest(Message, mockMessageProps);
    mockPropsCheckTest(mockMessageProps, Message);
});
