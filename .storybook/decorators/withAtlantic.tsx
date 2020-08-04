import React from 'react';
import { AtlanticProvider } from '../../src';
import { StoryFn } from '@storybook/addons';

export const withAtlantic = (storyFn: StoryFn) => (
    <AtlanticProvider>{storyFn()}</AtlanticProvider>
);
