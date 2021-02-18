import React from 'react';
import { FC } from 'react';
import { InputProps } from './base/types';
import { PropsWithoutChildren } from '../../../types';
import { InputWrapper } from './composed';
import { InputFixProps } from './composed/withFix/types';

export type InputType = FC<PropsWithoutChildren<InputFixProps & InputProps>>;

export const Input = InputWrapper;
