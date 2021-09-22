import { addons } from '@storybook/addons';
import agrpdev from './themes/agrpdev';

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    enableShortcuts: true,
    isToolshown: false,
    theme: agrpdev,
    selectedPanel: undefined,
    initialActive: 'sidebar',
    sidebar: {
        showRoots: false,
        collapsedRoots: ['other'],
    },
    toolbar: {
        title: { hidden: false },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
    },
});
