import React from 'react';
import { AtlanticProvider, theme } from '../../../src';

export default ({ children }) => <AtlanticProvider theme={theme}>{children}</AtlanticProvider>;
