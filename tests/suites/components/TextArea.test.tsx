import React from 'react';
import { TextAreaProps } from '../../../src';
import { shallow } from '../../utils';
import { mockPropsCheckTest } from '../../shared';
import { TextArea } from '../../../src/components';

const mockProps: TextAreaProps = {
    value: 'value',
    allowResize: true,
    size: `small`,
    isDisabled: true,
};

describe('TextArea', () => {
    it('should render InputBase', () => {
        const textArea = shallow(<TextArea />);
        expect(textArea).toBeDefined();
    });

    mockPropsCheckTest(mockProps, TextArea);
});
