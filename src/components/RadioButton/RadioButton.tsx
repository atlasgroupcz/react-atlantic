import { FC } from 'react';
import { UseRadioButtonProps } from './hooks';
import { RadioButtonView } from './view';

export type RadioButtonType = FC<UseRadioButtonProps>;

export const RadioButton: RadioButtonType = RadioButtonView;
