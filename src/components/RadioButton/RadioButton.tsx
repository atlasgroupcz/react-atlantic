import { FC } from 'react';
import { UseRadioButtonsProps } from './hooks';
import { RadioButtonsView } from './view';

export type RadioButtonsType = FC<UseRadioButtonsProps>;

export const RadioButtons: RadioButtonsType = RadioButtonsView;
