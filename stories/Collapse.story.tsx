import React from 'react';
import {
    withKnobs,
    select,
    array,
    number,
    boolean,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Collapse } from '../src/components/Collapse';
import { Demo } from '../src/components/Collapse/Demo';
import { CollapseProps } from '../src/components/Collapse/types';

const stories = storiesOf('Collapse', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => Demo(), {
    info: { inline: true },
});

stories.add(
    'Playground',
    () => {
        const numberOfPanels = number('numberOfPanels', 0);
        const indexArray: string[] = [
            ...Array(numberOfPanels)
                .fill(0)
                .map((_, index) => `${index}`),
        ];
        const activeUnique = array('activeUnique', indexArray, ',');
        const disabledPanelIndex = select(`disabledPanel`, indexArray, '0');

        const isAccordion = boolean('isAccrodion', false);

        const storyProps: CollapseProps = {
            activeUnique: isAccordion
                ? activeUnique?.[activeUnique.length - 1]
                : activeUnique,
            isAccordion,
        };
        const collapse = (
            <Collapse {...storyProps}>
                {renderPanels(+disabledPanelIndex, numberOfPanels)}
            </Collapse>
        );

        return collapse;
    },
    {
        info: { inline: true },
    }
);

const renderPanels = (disabledPanelIndex: number, numberOfPanels: number) => {
    return Array(numberOfPanels)
        .fill(0)
        .map((_, index) => (
            <Collapse.Panel
                isDisabled={index === disabledPanelIndex}
                header={`level 1 - ${index}`}
                unique={`${index}`}
            >
                <p>PRDEL number : {index}</p>
            </Collapse.Panel>
        ));
};
