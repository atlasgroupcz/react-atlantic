import React from 'react';
import styled from 'styled-components';
import { Tooltips, Text as NotStyledText } from '..';
import { crossOut, disableOnEvent } from './disableOnEvent';

const Text = styled(NotStyledText)`
    color: ${({ theme }) => theme.color.text.gamma};
`;

export default {
    title: 'Tooltips',
    component: Tooltips,
    argTypes: {
        contentAttr: crossOut,
        positionAttr: crossOut,
        hideTooltips: crossOut,
        transition: crossOut,
        Tooltip: crossOut,
        borderPadding: crossOut,
        margin: crossOut,
        ...disableOnEvent,
    },
};

export const Overview = () => (
    <Tooltips>
        <Text>Tooltip</Text>
    </Tooltips>
);
