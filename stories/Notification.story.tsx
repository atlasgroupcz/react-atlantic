import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Notification } from '../src/components/Notification';
import { Link } from '../src/components/Typography/Link';

const stories = storiesOf('Notification', module);

stories.addDecorator(withKnobs);

stories.add(
    'Playground',
    () => {
        const type = select(
            `type:`,
            ['default', 'primary', 'success', 'warning', 'error', 'info'],
            'default'
        );

        return (
            <>
                <Notification type={type}>Hello world!</Notification>
                <br />
                <br />
                <Notification
                    type={type}
                    description={'Lorem ipsum dolor sit amet'}
                >
                    Hello world!
                </Notification>
                <br />
                <br />
                <Notification
                    type={type}
                    description={
                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam quis nulla.'
                    }
                    MoreLink={
                        <Link
                            href={'#'}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                        >
                            Více
                        </Link>
                    }
                >
                    Hello world!
                </Notification>
            </>
        );
    },
    {
        info: { inline: true },
    }
);
