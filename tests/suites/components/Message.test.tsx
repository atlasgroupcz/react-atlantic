import { Message, MessageProps } from '../../../src';
import { mountTest, toBeDefinedTest, mockPropsCheckTest } from '../../shared';

const mockMessageProps: MessageProps = {
    type: 'success',
    Icon: null,
};

describe('Message', () => {
    mountTest(Message);
    toBeDefinedTest(Message, mockMessageProps);
    mockPropsCheckTest(mockMessageProps, Message);
});
