import { FC } from 'react';
import { wrap } from '../../utils';
import { UseRadioButtonsProps, useRadioButtons } from './hooks';
import { RadioButtonsView } from './view';

export type RadioButtonsType = FC<UseRadioButtonsProps>;

export const RadioButtons: RadioButtonsType = wrap(
    RadioButtonsView,
    useRadioButtons
);
