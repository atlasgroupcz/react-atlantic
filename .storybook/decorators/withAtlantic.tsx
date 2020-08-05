import React from 'react';
import { AtlanticProvider, theme } from '../../src';
import { StoryFn } from '@storybook/addons';

export const withAtlantic = (storyFn: StoryFn) => (
    <AtlanticProvider theme={theme}>{storyFn()}</AtlanticProvider>
);
