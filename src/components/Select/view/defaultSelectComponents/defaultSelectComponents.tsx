import { Icon } from '../../../Icon/view';
import {
    MenuList,
    NoOptionsMessage,
    ClearIndicator,
    Control,
    CrossIcon,
    DropdownIndicator,
    Menu,
    IndicatorsContainer,
    MultiValue,
    MultiValueLabel,
    MultiValueRemove,
    Placeholder,
    SelectContainer,
    SingleValue,
    ValueContainer,
    StyledOption,
} from '../style';
import React from 'react';
import { Text } from '../../../Typography/Text';
import { SelectComponentsConfig } from 'react-select/src/components';

import { Size } from '../../../../types';
import { OptionType } from '../../types';

export const defaultSelectComponents = <T extends OptionType>(
    size: Size,
    isFullWidth = false
): SelectComponentsConfig<T> => ({
    Option: ({ label, data, innerRef, innerProps }) => (
        <StyledOption
            ref={innerRef}
            size={size}
            className={data.className}
            {...innerProps}
        >
            {label}
        </StyledOption>
    ),
    NoOptionsMessage: ({ children, innerProps }) => (
        <NoOptionsMessage {...innerProps}>{children}</NoOptionsMessage>
    ),
    ClearIndicator: ({ innerProps }) => (
        <ClearIndicator {...innerProps}>
            <Icon name={'clear'} />
        </ClearIndicator>
    ),
    Control: ({
        isDisabled,
        isFocused,
        isMulti,
        hasValue,
        children,
        selectProps,
        innerProps,
    }) => {
        return (
            <Control
                isMenuOpened={selectProps.menuIsOpen}
                isFocused={isFocused}
                isMulti={isMulti}
                hasValue={hasValue}
                isFullWidth={isFullWidth}
                size={size}
                isDisabled={isDisabled}
                {...innerProps}
            >
                {children}
            </Control>
        );
    },
    CrossIcon: ({ children, innerProps }) => (
        <CrossIcon>
            <div {...innerProps}>{children}</div>
        </CrossIcon>
    ),
    DownChevron: ({ children, innerProps }) => (
        <div {...innerProps}>
            {children}
            <Icon name={'arrowDown'} />
        </div>
    ),
    DropdownIndicator: ({ selectProps, innerProps }) => (
        <DropdownIndicator {...innerProps} isDisabled={selectProps.isDisabled}>
            {selectProps.menuIsOpen ? (
                <Icon name={'arrowUp'} />
            ) : (
                <Icon name={'arrowDown'} />
            )}
        </DropdownIndicator>
    ),
    Group: ({ children }) => <div>{children}</div>,
    GroupHeading: ({ children, innerProps }) => <div>{children}</div>,
    Menu: ({ children, innerProps }) => <Menu {...innerProps}>{children}</Menu>,
    MenuList: ({ children }) => <MenuList>{children}</MenuList>,
    IndicatorsContainer: ({ children }) => (
        <IndicatorsContainer size={size}>{children}</IndicatorsContainer>
    ),
    Input: (props) => (
        <div>
            <input {...props} />
        </div>
    ),
    LoadingIndicator: ({ children, innerProps }) => (
        <div {...innerProps}>{children}</div>
    ),
    LoadingMessage: ({ children, innerProps }) => (
        <div {...innerProps}>{children}</div>
    ),
    MenuPortal: ({ children }) => <div>{children}</div>,
    MultiValue: ({ children, components, removeProps }) => (
        <MultiValue size={size}>
            <Text>{children}</Text>
            {components.Remove(removeProps)}
        </MultiValue>
    ),
    MultiValueContainer: ({ children, innerProps }) => (
        <div {...innerProps}>{children}</div>
    ),
    MultiValueLabel: ({ children, innerProps }) => (
        <MultiValueLabel {...innerProps}>{children}</MultiValueLabel>
    ),
    MultiValueRemove: (props) => (
        <MultiValueRemove {...props}>
            <Icon name={'close'} />
        </MultiValueRemove>
    ),
    Placeholder: ({ children }) => <Placeholder>{children}</Placeholder>,
    SelectContainer: ({ children }) => (
        <SelectContainer isFullWidth={isFullWidth} size={size}>
            {children}
        </SelectContainer>
    ),
    SingleValue: ({ children }) => (
        <SingleValue size={size} isFullWidth={isFullWidth}>
            <Text>{children}</Text>
        </SingleValue>
    ),
    ValueContainer: ({ children, isMulti }) => (
        <ValueContainer isMulti={isMulti} size={size} isFullWidth={isFullWidth}>
            {children}
        </ValueContainer>
    ),
});
