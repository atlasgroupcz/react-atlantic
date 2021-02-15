import React from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { OptionType } from '../Select';
import { TransferProps } from './types';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';

export const Transfer = <T extends OptionType>({
    options,
    inputProps,
    label,
    value,
    onOptionClick,
    isOpen,
    cancelButtonProps,
    clearButtonProps,
    submitButtonProps,
}: TransferProps<T>) => {
    const selectedOptionsSet = new Set(value?.map((option) => option.value));
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div>
                    <div>
                        <Input
                            {...inputProps}
                            suffix={<Icon name={`clear`} />}
                        />
                    </div>

                    {isOpen && (
                        <div>
                            <ul>
                                {options?.map((option) => (
                                    <li
                                        key={
                                            option.value +
                                            selectedOptionsSet.has(option.value)
                                        }
                                        onClick={() => onOptionClick?.(option)}
                                    >
                                        <Checkbox
                                            isChecked={selectedOptionsSet.has(
                                                option.value
                                            )}
                                        />
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {isOpen && value && value.length > 0 && (
                    <div>
                        <div>
                            <span>{label}</span>
                            <Button {...clearButtonProps} />
                        </div>
                        <div>
                            <ul>
                                {value?.map((option) => (
                                    <li
                                        key={option.value}
                                        onClick={() => onOptionClick?.(option)}
                                    >
                                        {option.label}
                                        <Icon name={'clear'} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            {isOpen && (
                <div>
                    <Button {...cancelButtonProps} />
                    <Button {...submitButtonProps} />
                </div>
            )}
        </>
    );
};
