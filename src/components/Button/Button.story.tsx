import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';
import { defaultValues } from '../../constants/defaultValues';
import { Size, Type } from '../../types';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => <div>Prdel</div>, { info: { inline: true } });

stories.add(
  'Playground',
  () => {
    const isDisabled = boolean(`isDisabled:`, defaultValues.isDisabled);
    const isFullWidth = boolean(`isFullWidth:`, defaultValues.isFullWidth);
    const isRound = boolean(`isRound:`, defaultValues.isRound);
    const size: Size = select(
      `size:`,
      ['small', `medium`, 'large'],
      defaultValues.size
    ) as Size;
    const type: Type = select(
      `type:`,
      ['default', 'primary', 'success', 'warning', 'error', 'dashed'],
      defaultValues.type
    ) as Type;
    const children = text(`text:`, defaultValues.value);
    const onClick = action(`onClick`);

    const button = (
      <Button
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        isRound={isRound}
        size={size}
        type={type}
        onClick={onClick}
      >
        {children}
      </Button>
    );

    return button;
  },
  {
    info: { inline: true },
  }
);
