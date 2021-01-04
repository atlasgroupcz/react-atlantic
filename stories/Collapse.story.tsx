import React from 'react';
import {
    withKnobs,
    select,
    array,
    number,
    boolean,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Collapse, useCollapseUnique, CollapseProps } from '../src';
import { wrap } from '../src/utils';

const stories = storiesOf('Collapse', module);

stories.addDecorator(withKnobs);

const StoryCollapse = wrap(Collapse, useCollapseUnique);
stories.add(
    'Overview',
    () => (
        <StoryCollapse>
            <Collapse.Panel header={'level1 - 2'} unique="1">
                <p>panel 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="level1 - 2" unique="2">
                <p>panel 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="level1 - 3" unique="3">
                <p>panel 3</p>
            </Collapse.Panel>
        </StoryCollapse>
    ),
    {
        info: { inline: true },
    }
);

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
                <p>Panel number : {index}</p>
            </Collapse.Panel>
        ));
};
