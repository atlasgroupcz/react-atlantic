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
import { StyledSelectProps } from '../../Types';

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
}: Readonly<Partial<StyledSelectProps>>) => {
    return {
        Option: (props: any) => <OptionComponent {...props} theme={theme} />,
        NoOptionsMessage: ({ children, innerProps }: any) => (
            <NoOptionsMessage {...innerProps}>{children}</NoOptionsMessage>
        ),
        ClearIndicator: ({ innerProps }: any) => (
            <ClearIndicator {...innerProps} theme={theme}>
                <Icon name={'clear'} />
            </ClearIndicator>
        ),
        Control: (props: any) => (
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
        CrossIcon: ({ children, innerProps }: any) => (
            <CrossIcon {...innerProps} theme={theme}>
                <div>{children}</div>
            </CrossIcon>
        ),
        DownChevron: ({ children, innerProps }: any) => (
            <div {...innerProps}>
                {children}
                <Icon name={'arrowDown'} />
            </div>
        ),
        DropdownIndicator: ({ innerProps, selectProps }: any) => (
            <DropdownIndicator
                isDisabled={isDisabled}
                {...innerProps}
                theme={theme}
            >
                {selectProps.menuIsOpen && <Icon name={'arrowUp'} />}
                {!selectProps.menuIsOpen && <Icon name={'arrowDown'} />}
            </DropdownIndicator>
        ),
        Group: ({ children }: any) => <div>{children}</div>,
        GroupHeading: ({ children, innerProps }: any) => (
            <div {...innerProps}>{children}</div>
        ),
        Menu: ({ children, innerProps }: any) => (
            <Menu {...innerProps} theme={theme}>
                {children}
            </Menu>
        ),
        MenuList: ({ children }: any) => (
            <MenuList theme={theme}>{children}</MenuList>
        ),
        IndicatorsContainer: ({ children }: any) => (
            <IndicatorsContainer size={size} theme={theme}>
                {children}
            </IndicatorsContainer>
        ),
        Input: (props: any) => (
            <div>
                <Input placeholder={`Začněte psát`} {...props} theme={theme} />
            </div>
        ),
        LoadingIndicator: ({ children, innerProps }: any) => (
            <div {...innerProps}>{children}</div>
        ),
        LoadingMessage: ({ children, innerProps }: any) => (
            <div {...innerProps}>{children}</div>
        ),
        MenuPortal: ({ children }: any) => <div>{children}</div>,
        MultiValue: ({
            children,
            innerProps,
            components,
            removeProps,
        }: any) => (
            <MultiValue size={size} {...innerProps} theme={theme}>
                <Text>{children}</Text>
                {components.Remove(removeProps)}
            </MultiValue>
        ),
        MultiValueContainer: ({ children, innerProps }: any) => (
            <div {...innerProps}>{children}</div>
        ),
        MultiValueLabel: ({ children, innerProps }: any) => (
            <MultiValueLabel {...innerProps} theme={theme}>
                {children}
            </MultiValueLabel>
        ),
        MultiValueRemove: ({ ...props }: any) => (
            <MultiValueRemove {...props} theme={theme}>
                <Icon name={'close'} />
            </MultiValueRemove>
        ),
        Placeholder: ({ children, innerProps }: any) => (
            <Placeholder {...innerProps} theme={theme}>
                {children}
            </Placeholder>
        ),
        SelectContainer: ({ children, innerProps, ...rest }: any) => (
            <SelectContainer
                isFullWidth={isFullWidth}
                size={size}
                {...innerProps}
                theme={theme}
            >
                {children}
            </SelectContainer>
        ),
        SingleValue: ({ children, innerProps }: any) => (
            <SingleValue
                size={size}
                isFullWidth={isFullWidth}
                {...innerProps}
                theme={theme}
            >
                <Text>{children}</Text>
            </SingleValue>
        ),
        ValueContainer: ({ children, isMulti, ...props }: any) => (
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
