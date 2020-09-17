import React, { FC } from 'react';
import {
    withKnobs,
    number,
    boolean,
    select,
    text,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import {
    Pagination,
    PaginationProps,
    Badge,
    Button,
    Title,
    PaginationButton,
    PaginationComponentProps,
    Icon,
} from '../src';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';
import { PaginationFirstDemo } from '../demos/Pagination';

const stories = storiesOf('Pagination', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => <>{PaginationFirstDemo()}</>, {
    info: { inline: true },
});

stories.add(
    'Playground',
    () => {
        const page: PaginationProps['page'] = number('page', 10, { min: 1 });
        const pageSize: PaginationProps['pageSize'] = number('pageSize', 20, {
            min: 1,
        });
        const total: PaginationProps['total'] = number('total', 500, {
            min: 1,
        });
        const showArrows: PaginationProps['showArrows'] = boolean(
            'showArrows',
            true
        );

        const optionsSeparator: SelectTypeOptionsProp<SeparatorKeysType> = Object.keys(
            optionsObj
        ) as SeparatorKeysType[];

        const separatorType: SeparatorKeysType = select(
            'separatorType',
            optionsSeparator,
            'default'
        );

        const leftType: SeparatorKeysType = select(
            'leftType',
            optionsSeparator,
            'default'
        );

        const rightType: SeparatorKeysType = select(
            'rightType',
            optionsSeparator,
            'default'
        );

        const optionsAs: SelectTypeOptionsProp<AsKeysType> = Object.keys(
            asObj
        ) as AsKeysType[];

        const asType: AsKeysType = select('asType', optionsAs, 'default');

        let separatorText = 'text';
        if (separatorType === 'text') {
            separatorText = text('separatorText', 'prdel');
        }

        const separator: PaginationProps['separator'] =
            separatorType === 'text' ? (
                <Title>{separatorText}</Title>
            ) : (
                optionsObj[separatorType]
            );

        const as: PaginationProps['as'] = asObj[asType];

        const left: PaginationProps['left'] =
            leftType === 'default'
                ? undefined
                : () => <>{optionsObj[leftType]}</>;

        const right: PaginationProps['left'] =
            leftType === 'default'
                ? undefined
                : () => <>{optionsObj[rightType]}</>;

        const props: PaginationProps = {
            page,
            pageSize,
            total,
            showArrows,
            separator,
            as,
            left,
            right,
        };

        return <Pagination {...props} />;
    },
    {
        info: { inline: true },
    }
);

const optionsObj = {
    Badge: <Badge type="error">What badge?!</Badge>,
    Button: (
        <Button size="large" isRound type="success">
            How is it even possible?
        </Button>
    ),
    default: undefined,
    text: 'text',
    nothing: null,
};

type SeparatorKeysType = keyof typeof optionsObj;

const PaginationIcon: FC<PaginationComponentProps> = ({
    isActive,
    children,
    ...props
}) => {
    return <Icon {...props} name={isActive ? 'star' : 'trash'} />;
};
const PaginationBadge: FC<PaginationComponentProps> = ({
    isActive,
    ...props
}) => {
    return <Badge {...props} type={isActive ? 'error' : 'default'} />;
};

type AsKeysType = keyof typeof asObj;

const asObj = {
    default: PaginationButton,
    Icon: PaginationIcon,
    Badge: PaginationBadge,
};
