import { Icon } from '../../../Icon/View';
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
} from '../Style';
import React, { FC } from 'react';
import { Input } from '../../../Input/view';
import { theme } from '../../../../theme';
import { Text } from '../../../Typography/Text';
import { OptionType, StyledSelectProps } from '../../Types';
import {
    SelectComponents,
    SelectComponentsConfig,
} from 'react-select/src/components';
import { ControlProps } from 'react-select/src/components/Control';

export const OptionComponent: FC<any> = (props) => {
    const { innerRef, innerProps, label, size, ...others } = props;
    const { className } = others.data;
    return (
        <StyledOption
            key={label}
            ref={innerRef}
            {...innerProps}
            size={size}
            className={className}
        >
            {label}
        </StyledOption>
    );
};

export const defaultComponents = ({
    isFocused,
    size,
    isDisabled,
    isFullWidth,
}: Readonly<Partial<StyledSelectProps>>): SelectComponentsConfig<
    OptionType
> => {
    return {
        Option: (props) => <OptionComponent {...props} theme={theme} />,
        NoOptionsMessage: ({ children, innerProps }) => (
            <NoOptionsMessage {...innerProps}>{children}</NoOptionsMessage>
        ),
        ClearIndicator: ({ innerProps }) => (
            <ClearIndicator {...innerProps} theme={theme}>
                <Icon name={'clear'} />
            </ClearIndicator>
        ),
        Control: (props) => (
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
        ),
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
                <Input placeholder={`Začněte psát`} {...props} theme={theme} />
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
