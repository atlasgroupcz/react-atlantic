import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withAtlantic } from './decorators/withAtlantic';

// automatically import all files ending in *.story.tsx
const req = require.context('../stories', true, /.story.jsx$|.story.tsx$/);

function loadStories() {
    addDecorator(withInfo);
    addDecorator(withAtlantic);
    req.keys().forEach(req);
}
configure(loadStories, module);
