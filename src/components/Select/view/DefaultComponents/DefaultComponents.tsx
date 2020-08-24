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
import { theme } from '../../../../theme';
import { Text } from '../../../Typography/Text';
import { OptionType, StyledSelectProps } from '../../types';
import { SelectComponentsConfig } from 'react-select/src/components';
import { ControlProps } from 'react-select/src/components/Control';
import { Props } from 'react-select';
import { OptionProps } from 'react-select/src/components/Option';
import { SizeWithDocs } from '../../../../types';

export const defaultComponents = ({
    isFocused,
    size,
    isDisabled,
    isFullWidth,
}: Readonly<Partial<StyledSelectProps>>): SelectComponentsConfig<
    OptionType
> => {
    return {
        Option: (optionProps) => {
            const props = optionProps as OptionProps<OptionType> & {
                size?: SizeWithDocs;
            };

            return (
                <StyledOption
                    {...props.innerProps}
                    ref={props.innerRef}
                    size={size}
                    className={props.data.className}
                    key={props.label}
                >
                    {props.label}
                </StyledOption>
            );
        },
        NoOptionsMessage: ({ children, innerProps }) => (
            <NoOptionsMessage {...innerProps}>{children}</NoOptionsMessage>
        ),
        ClearIndicator: ({ innerProps }) => (
            <ClearIndicator {...innerProps} theme={theme}>
                <Icon name={'clear'} />
            </ClearIndicator>
        ),
        Control: (controlProps) => {
            const props = controlProps as ControlProps<OptionType> &
                Partial<Props<OptionType>>;

            return (
                <Control
                    {...props.innerProps}
                    isMenuOpened={props.menuIsOpen}
                    isFocused={isFocused}
                    isMulti={props.isMulti}
                    hasValue={props.hasValue}
                    isFullWidth={props.isFullWidth}
                    size={size}
                    isDisabled={props.isDisabled}
                    theme={theme}
                >
                    {props.children}
                </Control>
            );
        },
        CrossIcon: ({ children, innerProps }) => (
            <CrossIcon {...innerProps} theme={theme}>
                <div>{children}</div>
            </CrossIcon>
        ),
        DownChevron: ({ children, innerProps }) => (
            <div {...innerProps}>
                {children}
                <Icon name={'arrowDown'} />
            </div>
        ),
        DropdownIndicator: ({ innerProps, selectProps }) => (
            <DropdownIndicator
                isDisabled={isDisabled}
                {...innerProps}
                theme={theme}
            >
                {selectProps.menuIsOpen && <Icon name={'arrowUp'} />}
                {!selectProps.menuIsOpen && <Icon name={'arrowDown'} />}
            </DropdownIndicator>
        ),
        Group: ({ children }) => <div>{children}</div>,
        GroupHeading: ({ children, innerProps }) => (
            <div {...innerProps}>{children}</div>
        ),
        Menu: ({ children, innerProps }) => (
            <Menu {...innerProps} theme={theme}>
                {children}
            </Menu>
        ),
        MenuList: ({ children }) => (
            <MenuList theme={theme}>{children}</MenuList>
        ),
        IndicatorsContainer: ({ children }) => (
            <IndicatorsContainer size={size} theme={theme}>
                {children}
            </IndicatorsContainer>
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
        MultiValue: ({ children, innerProps, components, removeProps }) => (
            <MultiValue size={size} {...innerProps} theme={theme}>
                <Text>{children}</Text>
                {components.Remove(removeProps)}
            </MultiValue>
        ),
        MultiValueContainer: ({ children, innerProps }) => (
            <div {...innerProps}>{children}</div>
        ),
        MultiValueLabel: ({ children, innerProps }) => (
            <MultiValueLabel {...innerProps} theme={theme}>
                {children}
            </MultiValueLabel>
        ),
        MultiValueRemove: ({ ...props }) => (
            <MultiValueRemove {...props} theme={theme}>
                <Icon name={'close'} />
            </MultiValueRemove>
        ),
        Placeholder: ({ children, innerProps }) => (
            <Placeholder {...innerProps} theme={theme}>
                {children}
            </Placeholder>
        ),
        SelectContainer: ({ children, innerProps, ...rest }) => (
            <SelectContainer
                isFullWidth={isFullWidth}
                size={size}
                {...innerProps}
                theme={theme}
            >
                {children}
            </SelectContainer>
        ),
        SingleValue: ({ children, innerProps }) => (
            <SingleValue
                size={size}
                isFullWidth={isFullWidth}
                {...innerProps}
                theme={theme}
            >
                <Text>{children}</Text>
            </SingleValue>
        ),
        ValueContainer: ({ children, isMulti, ...props }) => (
            <ValueContainer
                isMulti={isMulti}
                size={size}
                isFullWidth={isFullWidth}
                theme={theme}
            >
                {children}
            </ValueContainer>
        ),
    };
};
